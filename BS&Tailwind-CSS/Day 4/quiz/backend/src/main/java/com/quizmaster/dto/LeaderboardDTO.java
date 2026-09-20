package com.quizmaster.dto;
import java.time.LocalDateTime;
public record LeaderboardDTO(int rank, String playerName, String topicName, int score, int timeTaken, LocalDateTime createdAt) { }
