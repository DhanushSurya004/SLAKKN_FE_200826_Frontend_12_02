package com.quizmaster.controller;
import com.quizmaster.dto.TopicDTO;
import com.quizmaster.service.QuizService;
import java.util.List;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/topics")
public class TopicController { private final QuizService quizService; public TopicController(QuizService quizService) { this.quizService = quizService; } @GetMapping public List<TopicDTO> all() { return quizService.getTopics(); } }
