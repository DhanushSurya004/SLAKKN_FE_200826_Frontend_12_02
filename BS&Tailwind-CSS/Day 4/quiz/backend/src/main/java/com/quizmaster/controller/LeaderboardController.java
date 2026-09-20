package com.quizmaster.controller;
import com.quizmaster.dto.LeaderboardDTO;
import com.quizmaster.service.LeaderboardService;
import java.util.List;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/leaderboard")
public class LeaderboardController {
    private final LeaderboardService service; public LeaderboardController(LeaderboardService service) { this.service = service; }
    @GetMapping public List<LeaderboardDTO> global() { return service.global(); }
    @GetMapping("/topic/{topicId}") public List<LeaderboardDTO> topic(@PathVariable Long topicId) { return service.byTopic(topicId); }
}
