<script setup>
import Question from "../components/Question.vue";
import QuestionHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import quizes from "../data/quizes.json";

const router = useRoute();
const id = parseInt(router.params.id);
const quiz = quizes.find((quiz) => quiz.id === id);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

// const questionStatus = `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
// watch(currentQuestionIndex.value, (val) => {
//   questionStatus.value = `${val + 1} / ${quiz.questions.length}`;
// });
const questionStatus = computed(() => {
  return `${currentQuestionIndex.value} / ${quiz.questions.length}`;
});
const barPercentage = computed(
  () => ` ${(100 * currentQuestionIndex.value) / quiz.questions.length}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuestionHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <div>
      <Question
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />

      <Result
        v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
    </div>
  </div>
</template>

<style scoped></style>
