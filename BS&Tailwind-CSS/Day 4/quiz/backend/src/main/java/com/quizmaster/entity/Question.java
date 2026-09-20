package com.quizmaster.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "questions", uniqueConstraints = @UniqueConstraint(columnNames = {"topic_id", "question_text"}))
public class Question {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "question_text", nullable = false, length = 600)
    private String questionText;
    @Column(nullable = false, length = 300) private String optionA;
    @Column(nullable = false, length = 300) private String optionB;
    @Column(nullable = false, length = 300) private String optionC;
    @Column(nullable = false, length = 300) private String optionD;
    @Column(nullable = false, length = 1) private String correctAnswer;
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "topic_id", nullable = false)
    private Topic topic;
    public Question() { }
    public Question(Topic topic, String text, String a, String b, String c, String d, String correct) {
        this.topic = topic; questionText = text; optionA = a; optionB = b; optionC = c; optionD = d; correctAnswer = correct;
    }
    public Long getId() { return id; } public String getQuestionText() { return questionText; }
    public String getOptionA() { return optionA; } public String getOptionB() { return optionB; }
    public String getOptionC() { return optionC; } public String getOptionD() { return optionD; }
    public String getCorrectAnswer() { return correctAnswer; } public Topic getTopic() { return topic; }
}
