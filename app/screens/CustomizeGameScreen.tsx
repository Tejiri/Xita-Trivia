

import CustomButton from "@/components/form/CustomButton";
import PageWithHeader from "@/components/pages/PageWithHeader";
import DifficultyView from "@/components/screen-components/customize-game/DifficultyView";
import QuestionCountView from "@/components/screen-components/customize-game/QuestionCountView";
import QuestionTypeView from "@/components/screen-components/customize-game/QuestionTypeView";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS from "@/constants/CONSTANTS";
import { useStores } from "@/stores/useStores";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const CustomizeGameScreen = observer(() => {
    const { gameSetupStore } = useStores();
    return (
        <PageWithHeader
            showBackButton
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={[CONSTANTS.TYPOGRAPHY.h1, { textAlign: "center" }]}>Customize Your</Text>
                <Text style={[CONSTANTS.TYPOGRAPHY.h1, { color: CONSTANTS.COLORS.primary.primary9, textAlign: "center" }]}>Game</Text>
                <Spacer height={10} />
                <Text
                    style={[CONSTANTS.TYPOGRAPHY.body, { textAlign: "center", color: CONSTANTS.COLORS.neutral.neutral9 }]}
                >
                    Fine-tune the challenge for your next session.
                </Text>
                <Spacer height={40} />

                <Text style={[CONSTANTS.TYPOGRAPHY.h3,]}>
                    Question Count
                </Text>


                <View style={styles.questionCountRow}>
                    <QuestionCountView
                        onPress={() => gameSetupStore.setQuestionCount(5)}
                        isSelected={gameSetupStore.questionCount === 5}
                        count={5} />
                    <QuestionCountView
                        onPress={() => gameSetupStore.setQuestionCount(10)}
                        isSelected={gameSetupStore.questionCount === 10}
                        count={10} />
                    <QuestionCountView
                        onPress={() => gameSetupStore.setQuestionCount(15)}
                        isSelected={gameSetupStore.questionCount === 15}
                        count={15} />
                    <QuestionCountView
                        onPress={() => gameSetupStore.setQuestionCount(20)}
                        isSelected={gameSetupStore.questionCount === 20}
                        count={20} />

                </View>

                {/* Add customization options here */}
                <Spacer height={20} />
                <Text style={[CONSTANTS.TYPOGRAPHY.h3,]}>
                    Choose Difficulty
                </Text>

                <Spacer height={20} />




                <DifficultyView

                    isSelected={gameSetupStore.difficulty === "Easy"}
                    label="Easy"
                    description="Casual fun, standard points."
                    onPress={() => {
                        gameSetupStore.setDifficulty("Easy");
                    }}
                />

                <DifficultyView
                    isSelected={gameSetupStore.difficulty === "Medium"}
                    label="Medium"
                    description="Competitive pace, 1.5x bonus."
                    onPress={() => {
                        gameSetupStore.setDifficulty("Medium");
                    }}
                />

                <DifficultyView
                    isSelected={gameSetupStore.difficulty === "Hard"}
                    label="Hard"
                    description="Mastery level, 3x score multiplier."
                    onPress={() => {
                        gameSetupStore.setDifficulty("Hard");
                    }}
                />


                <Spacer height={20} />
                <Text style={[CONSTANTS.TYPOGRAPHY.h3,]}>
                    Question Type
                </Text>

                <Spacer height={20} />


                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <QuestionTypeView
                        isSelected={gameSetupStore.gameType === "multipleChoice"}
                        onPress={() => { gameSetupStore.setGameType("multipleChoice"); }}
                        text1="Multiple"
                        text2="Choice"
                        icon="list"
                        rotateIconValue="10deg"
                    />
                    <Spacer width={20} />
                    <QuestionTypeView
                        isSelected={gameSetupStore.gameType === "trueFalse"}
                        onPress={() => { gameSetupStore.setGameType("trueFalse"); }}
                        text1="True /"
                        text2="False"
                        icon="help-sharp"
                        rotateIconValue="-10deg"
                    />
                </View>

                <Spacer height={40} />

                <CustomButton
                    buttonText="START GAME"
                    onClick={() => {
                        gameSetupStore.storeGetQuestions().then(()=>{
                            if (gameSetupStore.error) {
                                return;
                            }
                            gameSetupStore.storeShuffleQuestions();

                        router.replace("/screens/GameScreen");
                        });
                    }} />

                <Spacer height={40} />
            </ScrollView>

            <LoadingOverlay visible={gameSetupStore.isLoading} />
        </PageWithHeader>
    );
});






const styles = StyleSheet.create({
    questionCountRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        justifyContent: "space-evenly"
    },

});

export default CustomizeGameScreen;