import GradientBackground from "@/components/backgrounds/GradientBackground";
import CustomButton from "@/components/CustomButton";
import LinearProgress from "@/components/LinearProgress";
import QuestionAnswerCard from "@/components/QuestionAnswerCard";
import Spacer from "@/components/Spacer";
import CONSTANTS from "@/constants/Constants";
import { shuffle } from "@/helpers/Helpers";
import { questionStore } from "@/models/QuestionStore";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const Questions = observer(() => {

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const answers: String[] = [];
    answers.push(questionStore.response.results[currentQuestion - 1].correct_answer);
    answers.push(...questionStore.response.results[currentQuestion - 1].incorrect_answers);
    console.log(answers);

    setShuffledAnswers(shuffle(answers));
    console.log(shuffledAnswers);

  }, [currentQuestion])
  return <GradientBackground>
    <View style={styles.detailsView}>
      <Text style={CONSTANTS.TYPOGRAPHY.h4}>Question {currentQuestion}/10</Text>
      <View style={styles.hintScoreView}>
        <View style={styles.hintView}><Text style={CONSTANTS.TYPOGRAPHY.h4}>{CONSTANTS.EMOJIS.ui.hint}3</Text></View>
        <Text style={CONSTANTS.TYPOGRAPHY.h4}>Score: {score}</Text>
      </View>
    </View>

    <Spacer height={20} />
    <LinearProgress progress={currentQuestion / 10} />

    <Spacer height={25} />
    <QuestionAnswerCard
      type="question" title={questionStore.response.results[currentQuestion - 1].question} displayType={"neutral"}
      disabled={false} />

    {shuffledAnswers.map((answer, index) => (
      <QuestionAnswerCard
        key={index}
        type="answer" title={answer}
        onPress={() => {
          setSelectedAnswer(answer);
          if (answer === questionStore.response.results[currentQuestion - 1].correct_answer) {
            setScore(score + 1);
          }
        }}
        displayType={selectedAnswer && answer === questionStore.response.results[currentQuestion - 1].correct_answer ? "success" : (answer === selectedAnswer ? "error" : "neutral")}
        // selectedAnswer={selectedAnswer}
        disabled={selectedAnswer !== null}
      />
    ))}

    {selectedAnswer === null ? null :
      <CustomButton onPress={() => {


        if (currentQuestion === questionStore.response.results.length) {
          // navigate to results screen
          router.replace({pathname: "/screens/Results", params: { score: score }});
        
          setCurrentQuestion(1);
          setSelectedAnswer(null);
          console.log("Quiz Complete! Navigating to Results screen...");
        } else {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);

        }
      }} buttonText={currentQuestion === questionStore.response.results.length ? "See Results" : "Next Question"} />}
    {/* <QuestionAnswerCard type="answer" title={questionStore.response.results[0].correct_answer}/> */}

    {/* <QuestionAnswerCard />

    <QuestionAnswerCard />

    <QuestionAnswerCard />

    <QuestionAnswerCard /> */}
    {/* <LinearProgress progress={0.5} style={{ width: 300 }} color="red" /> */}
    {/* <LinearProgress progress={0.7} style={{ width: 300, height: 10, borderRadius: 5 }} color="#FFD700" /> */}
  </GradientBackground>;
});

const styles = StyleSheet.create({
  detailsView: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  hintScoreView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  hintView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: CONSTANTS.COLORS.backgrounds.bgWhite20,
    padding: 10,
    borderRadius: 15,
  }
});
export default Questions;