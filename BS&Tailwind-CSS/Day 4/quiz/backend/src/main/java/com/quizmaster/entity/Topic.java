package com.quizmaster.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "topics")
public class Topic {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true, length = 80)
    private String name;
    @OneToMany(mappedBy = "topic")
    private List<Question> questions = new ArrayList<>();
    @OneToMany(mappedBy = "topic")
    private List<QuizResult> quizResults = new ArrayList<>();
    public Topic() { }
    public Topic(String name) { this.name = name; }
    public Long getId() { return id; }
    public String getName() { return name; }
}
