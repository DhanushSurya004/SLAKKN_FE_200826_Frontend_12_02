package com.quizmaster.service;

import com.quizmaster.dto.*;
import com.quizmaster.entity.*;
import com.quizmaster.exception.ResourceNotFoundException;
import com.quizmaster.repository.*;
import java.util.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class QuizService {
    private static final int QUIZ_SIZE = 10;
    private final TopicRepository topicRepository; private final QuestionRepository questionRepository; private final QuizResultRepository resultRepository;
    public QuizService(TopicRepository topics, QuestionRepository questions, QuizResultRepository results) { topicRepository = topics; questionRepository = questions; resultRepository = results; }
    public List<TopicDTO> getTopics() { return topicRepository.findAll().stream().map(t -> new TopicDTO(t.getId(), t.getName())).toList(); }
    public List<QuizQuestionDTO> getQuestions(Long topicId) {
        requireTopic(topicId); List<Question> questions = new ArrayList<>(questionRepository.findByTopicId(topicId));
        if (questions.size() < QUIZ_SIZE) throw new IllegalArgumentException("This topic does not have enough questions yet.");
        Collections.shuffle(questions);
        return questions.stream().limit(QUIZ_SIZE).map(q -> new QuizQuestionDTO(q.getId(), q.getQuestionText(), q.getOptionA(), q.getOptionB(), q.getOptionC(), q.getOptionD())).toList();
    }
    @Transactional
    public QuizResultDTO submit(SubmitQuizRequest request) {
        Topic topic = requireTopic(request.topicId());
        if (request.answers().size() != QUIZ_SIZE) throw new IllegalArgumentException("Exactly 10 answers must be submitted.");
        Set<Long> ids = new HashSet<>(); for (AnswerDTO answer : request.answers()) if (!ids.add(answer.questionId())) throw new IllegalArgumentException("Each question can be answered only once.");
        List<Question> questions = questionRepository.findAllById(ids);
        if (questions.size() != QUIZ_SIZE || questions.stream().anyMatch(q -> !q.getTopic().getId().equals(topic.getId()))) throw new IllegalArgumentException("One or more questions are invalid for this topic.");
        Map<Long, String> selections = new HashMap<>(); request.answers().forEach(a -> selections.put(a.questionId(), a.selectedOption()));
        int correct = (int) questions.stream().filter(q -> q.getCorrectAnswer().equals(selections.get(q.getId()))).count();
        int score = correct * 10;
        QuizResult result = resultRepository.save(new QuizResult(request.playerName().trim(), topic, score, QUIZ_SIZE, request.timeTaken()));
        return new QuizResultDTO(result.getPlayerName(), topic.getName(), score, correct, QUIZ_SIZE, result.getTimeTaken());
    }
    private Topic requireTopic(Long id) { return topicRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Topic " + id + " was not found.")); }
}
