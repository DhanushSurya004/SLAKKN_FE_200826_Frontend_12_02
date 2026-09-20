package com.quizmaster.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "quiz_results")
public class QuizResult {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false, length = 40) private String playerName;
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "topic_id", nullable = false) private Topic topic;
    @Column(nullable = false) private int score;
    @Column(nullable = false) private int totalQuestions;
    @Column(nullable = false) private int timeTaken;
    @Column(nullable = false) private LocalDateTime createdAt;
    public QuizResult() { }
    public QuizResult(String playerName, Topic topic, int score, int totalQuestions, int timeTaken) {
        this.playerName = playerName; this.topic = topic; this.score = score; this.totalQuestions = totalQuestions;
        this.timeTaken = timeTaken; this.createdAt = LocalDateTime.now();
    }
    public Long getId() { return id; } public String getPlayerName() { return playerName; } public Topic getTopic() { return topic; }
    public int getScore() { return score; } public int getTotalQuestions() { return totalQuestions; }
    public int getTimeTaken() { return timeTaken; } public LocalDateTime getCreatedAt() { return createdAt; }
}
