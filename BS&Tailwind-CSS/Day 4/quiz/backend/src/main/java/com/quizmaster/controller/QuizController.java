package com.quizmaster.controller;
import com.quizmaster.dto.*;
import com.quizmaster.service.QuizService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/quiz")
public class QuizController {
    private final QuizService quizService; public QuizController(QuizService quizService) { this.quizService = quizService; }
    @GetMapping("/questions/{topicId}") public List<QuizQuestionDTO> questions(@PathVariable Long topicId) { return quizService.getQuestions(topicId); }
    @PostMapping("/submit") public QuizResultDTO submit(@Valid @RequestBody SubmitQuizRequest request) { return quizService.submit(request); }
}
