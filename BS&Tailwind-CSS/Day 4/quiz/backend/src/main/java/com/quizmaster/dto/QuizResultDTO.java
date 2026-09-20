package com.quizmaster.dto;
public record QuizResultDTO(String playerName, String topicName, int score, int correctAnswers, int totalQuestions, int timeTaken) { }
