package com.quizmaster.repository;
import com.quizmaster.entity.QuizResult;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
public interface QuizResultRepository extends JpaRepository<QuizResult, Long> {
    List<QuizResult> findAllByOrderByScoreDescTimeTakenAscCreatedAtDesc();
    List<QuizResult> findByTopicIdOrderByScoreDescTimeTakenAscCreatedAtDesc(Long topicId);
}
