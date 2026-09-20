package com.quizmaster.service;
import com.quizmaster.dto.LeaderboardDTO;
import com.quizmaster.entity.QuizResult;
import com.quizmaster.exception.ResourceNotFoundException;
import com.quizmaster.repository.*;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class LeaderboardService {
    private final QuizResultRepository results; private final TopicRepository topics;
    public LeaderboardService(QuizResultRepository results, TopicRepository topics) { this.results = results; this.topics = topics; }
    @Transactional(readOnly = true)
    public List<LeaderboardDTO> global() { return map(results.findAllByOrderByScoreDescTimeTakenAscCreatedAtDesc()); }
    @Transactional(readOnly = true)
    public List<LeaderboardDTO> byTopic(Long topicId) { if (!topics.existsById(topicId)) throw new ResourceNotFoundException("Topic " + topicId + " was not found."); return map(results.findByTopicIdOrderByScoreDescTimeTakenAscCreatedAtDesc(topicId)); }
    private List<LeaderboardDTO> map(List<QuizResult> rows) { AtomicInteger rank = new AtomicInteger(); return rows.stream().map(r -> new LeaderboardDTO(rank.incrementAndGet(), r.getPlayerName(), r.getTopic().getName(), r.getScore(), r.getTimeTaken(), r.getCreatedAt())).toList(); }
}
