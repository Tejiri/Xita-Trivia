
import CurvedBackground from "@/components/CurvedBackround";
import CustomButton from "@/components/form/CustomButton";
import PageWithHeader from "@/components/pages/PageWithHeader";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import ProfileAvatar from "@/components/ui/ProfileAvater";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS from "@/constants/CONSTANTS";
import { useStores } from "@/stores/useStores";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";


const GameScreen = observer(() => {
    // const { gameSetupStore } = useStores();
    const [timerKey, setTimerKey] = useState(0);

    const { gameSetupStore } = useStores();
    const prevRemainingRef = useRef<number | null>(null);
    const isTimerPlaying = !gameSetupStore.isLoading;

    // helper to reset prev when restarting / next question
    function resetTimerTracking() {
        prevRemainingRef.current = null;
    }

    // function setStreaksAndScore() {

    // }


    return (
        <PageWithHeader
            showBackButton={false}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Spacer height={10} />
                <View
                    style={{
                        backgroundColor: CONSTANTS.COLORS.neutral.neutral4,
                        width: "100%",
                        height: 15,
                        borderRadius: 20
                    }}
                >
                    <View style={{
                        backgroundColor: CONSTANTS.COLORS.primary.primary9,
                        width: `${((gameSetupStore.currentQuestionIndex + 1) / (gameSetupStore.questions?.length!)) * 100}%`,
                        height: 15,
                        borderRadius: 20
                    }}
                    />
                </View>


                <Spacer height={30} />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >

                    <View>
                        <ProfileAvatar
                            backgroundColor={CONSTANTS.COLORS.secondary.secondary3}
                            size={"auto"}
                            paddingHorizontal={10}
                            paddingVertical={5}>
                            <Text>Question {gameSetupStore.currentQuestionIndex + 1}/{gameSetupStore.questions?.length}</Text>
                        </ProfileAvatar>


                        <Text
                            style={[CONSTANTS.TYPOGRAPHY.h5, { color: CONSTANTS.COLORS.neutral.neutral5 }]}
                        >{gameSetupStore.questions![gameSetupStore.currentQuestionIndex]?.category}</Text>

                    </View>

                    <CountdownCircleTimer
                        key={timerKey}
                        // isGrowing={isTimerPlaying}
                        isPlaying={isTimerPlaying}  
                        duration={gameSetupStore.difficulty === "Easy" ? 20 : gameSetupStore.difficulty === "Medium" ? 25 : 30}
                        colors={['#6700B5', '#F7B801', '#A30000', '#A30000']}
                        // colorsTime={[15, 10, 5, 0]}
                        colorsTime={
                            gameSetupStore.difficulty === "Easy" ? [20, 15, 10, 0] :
                                gameSetupStore.difficulty === "Medium" ? [25, 20, 15, 0] :
                                    [30, 25, 20, 0]
                        }
                        size={60}

                        strokeWidth={5}
                        onUpdate={(remainingTime) => {

                            // only increment when the remainingTime actually decreased
                            const prev = prevRemainingRef.current;
                            if (prev == null) {
                                // first onUpdate after mount - set prev but don't count yet
                                prevRemainingRef.current = remainingTime;
                                return;
                            }
                            if (remainingTime < prev) {
                                gameSetupStore.incrementTimeSpent();
                                prevRemainingRef.current = remainingTime;
                            }
                        }}

                        onComplete={() => {

                            if (gameSetupStore.currentQuestionIndex === gameSetupStore.questions!.length - 1) {
                                router.replace("/screens/GameResultScreen");
                            } else {
                                gameSetupStore.setNextQuestion();
                            }
                            gameSetupStore.setHintText("");
                            setTimerKey(timerKey + 1);
                            resetTimerTracking();
                            // do your stuff here
                            return { shouldRepeat: false, delay: 0 } // repeat animation in 1.5 seconds
                        }}
                    >
                        {({ remainingTime }) => <Text
                            style={[CONSTANTS.TYPOGRAPHY.h5, { textAlign: "center" }]}
                        >{remainingTime}</Text>}
                    </CountdownCircleTimer>


                </View>

                <Spacer height={30} />
                <CurvedBackground
                    shadow
                >
                    <Text style={[CONSTANTS.TYPOGRAPHY.h2,]}>
                        {gameSetupStore.questions![gameSetupStore.currentQuestionIndex]?.question}
                    </Text>
                    <Spacer height={20} />
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >

                        <View>

                            <Ionicons

                                onPress={async () => {
                                    if (gameSetupStore.hintsLeft < 1) {
                                        Alert.alert(
                                            "Error",
                                            "No hints left",
                                            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                                        )
                                    } else {

                                        await gameSetupStore.storeGenerateHint(
                                            gameSetupStore.questions![gameSetupStore.currentQuestionIndex].question!,
                                            gameSetupStore.questions![gameSetupStore.currentQuestionIndex].correct_answer!
                                        ).then(() => {
                                            if (gameSetupStore.error) {
                                                Alert.alert(
                                                    "Error",
                                                    gameSetupStore.error,
                                                    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                                                )
                                            }
                                        });
                                    }

                                    console.log(gameSetupStore.hintsLeft);

                                    // }
                                }}

                                name="bulb-outline"
                                size={24}
                                color={CONSTANTS.COLORS.primary.primary9} />

                            <View
                                style={{
                                    position: "absolute",
                                    top: -6,
                                    right: -6,
                                    minWidth: 18,
                                    height: 18,
                                    borderRadius: 9,
                                    backgroundColor: CONSTANTS.COLORS.primary.primary11 || "red",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingHorizontal: 4,
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 10, fontWeight: "700" }}>
                                    {gameSetupStore.hintsLeft}
                                </Text>
                            </View>
                        </View>


                        {gameSetupStore.hintText && (
                            <Text style={[CONSTANTS.TYPOGRAPHY.body, { color: CONSTANTS.COLORS.neutral.neutral6, marginLeft: 10 }]}>
                                {gameSetupStore.hintText}
                            </Text>
                        )}
                    </View>
                </CurvedBackground>

                <Spacer height={30} />

                <AnswerListItem
                    onPress={() => {
                        gameSetupStore.setSelectedAnswer(gameSetupStore.shuffledAnswers[0]);
                        // setStreaksAndScore();
                    }}
                    letter="A"
                    answer={gameSetupStore.shuffledAnswers[0]}
                />


                <AnswerListItem
                    onPress={() => {
                        gameSetupStore.setSelectedAnswer(gameSetupStore.shuffledAnswers[1]);
                        // setStreaksAndScore();
                    }}
                    letter="B"
                    answer={gameSetupStore.shuffledAnswers[1]}
                />


                <AnswerListItem
                    onPress={() => {
                        gameSetupStore.setSelectedAnswer(gameSetupStore.shuffledAnswers[2]);
                        // setStreaksAndScore();
                    }}
                    letter="C"
                    answer={gameSetupStore.shuffledAnswers[2]}
                />


                <AnswerListItem
                    onPress={() => {
                        gameSetupStore.setSelectedAnswer(gameSetupStore.shuffledAnswers[3]);
                    }}
                    letter="D"
                    answer={gameSetupStore.shuffledAnswers[3]}
                />

                {gameSetupStore.selectedAnswer && <CustomButton
                    onClick={() => {


                        if (gameSetupStore.currentQuestionIndex === gameSetupStore.questions!.length - 1) {
                            router.replace("/screens/GameResultScreen");
                        } else {
                            gameSetupStore.setNextQuestion();
                        }

                        setTimerKey(prevKey => prevKey + 1);
                        resetTimerTracking();
                        gameSetupStore.setHintText("");

                    }}
                    buttonText={gameSetupStore.currentQuestionIndex === gameSetupStore.questions!.length - 1 ? "See Results" : "Next Question"}
                />}
            </ScrollView>

            <LoadingOverlay visible={gameSetupStore.isLoading} />
        </PageWithHeader>
    );
});

interface IAnswerListItem {
    onPress?: () => void;
    letter: string;
    answer: string;
    // isSelected?: boolean;
    // correctAnswer?: boolean | null;
}

const AnswerListItem = observer(({ letter, answer, onPress }: IAnswerListItem) => {

    const { gameSetupStore } = useStores();
    return <View>
        <CurvedBackground
            onPress={() => {
                onPress?.();
            }}
            borderRadius={100}
            flexDirection="row"
            alignItems="center"
            backgroundColor={

                gameSetupStore.selectedAnswer === null
                    ? CONSTANTS.COLORS.primary.white
                    : gameSetupStore.selectedAnswer === answer && gameSetupStore.questions![gameSetupStore.currentQuestionIndex].correct_answer === answer
                        ? CONSTANTS.COLORS.answerStates.bgGreen
                        : gameSetupStore.selectedAnswer === answer && gameSetupStore.questions![gameSetupStore.currentQuestionIndex].correct_answer !== answer
                            ? CONSTANTS.COLORS.answerStates.bgRed
                            : answer === gameSetupStore.questions![gameSetupStore.currentQuestionIndex].correct_answer
                                ? CONSTANTS.COLORS.answerStates.bgGreen
                                : CONSTANTS.COLORS.primary.white


                // correctAnswer  === true &&  isSelected === true  ? CONSTANTS.COLORS.primary.white
                //     : correctAnswer
                //         ? CONSTANTS.COLORS.answerStates.bgGreen
                //         : isSelected != correctAnswer
                //             ? CONSTANTS.COLORS.answerStates.bgRed
                //             : CONSTANTS.COLORS.primary.primary8
            }

        >
            {/* isSelected != correctAnswer */}
            <ProfileAvatar
                size={"auto"}
                paddingHorizontal={20}
                paddingVertical={10}
                borderRadius={50}
                backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
            >
                <Text style={[CONSTANTS.TYPOGRAPHY.h3, { color: CONSTANTS.COLORS.primary.primary10 }]}>{letter}</Text>
            </ProfileAvatar>
            <Spacer width={15} />
            <Text style={[
                CONSTANTS.TYPOGRAPHY.h4,
                {
                    // color: isSelected || correctAnswer ? CONSTANTS.COLORS.primary.white
                    //     : CONSTANTS.COLORS.primary.black,
                    flex: 1
                }]}>
                {answer}
            </Text>

            {/* {correctAnswer != null && (<ProfileAvatar
                size={25}
                backgroundColor="white"
            >
                <Ionicons
                    name={correctAnswer ? "checkmark-outline" : "close"}
                    size={15}
                    color={CONSTANTS.COLORS.primary.primary11} />
            </ProfileAvatar>)} */}
        </CurvedBackground>

        <Spacer height={25} />
    </View>
})
export default GameScreen;