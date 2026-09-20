package com.quizmaster.dto;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import java.util.List;
public record SubmitQuizRequest(
    @NotBlank @Size(max = 40) String playerName,
    @NotNull Long topicId,
    @NotEmpty @Size(max = 10) List<@Valid AnswerDTO> answers,
    @Min(0) @Max(60) int timeTaken) { }
