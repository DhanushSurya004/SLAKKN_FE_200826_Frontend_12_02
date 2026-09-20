package com.quizmaster.dto;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
public record AnswerDTO(@NotNull Long questionId, @NotNull @Pattern(regexp = "[ABCDX]", message = "Selected option must be A, B, C, or D") String selectedOption) { }
