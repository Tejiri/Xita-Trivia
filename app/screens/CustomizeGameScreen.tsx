
import CustomButton from "@/components/form/CustomButton";
import PageWithHeader from "@/components/pages/PageWithHeader";
import DifficultyView from "@/components/screen-components/customize-game/DifficultyView";
import QuestionCountView from "@/components/screen-components/customize-game/QuestionCountView";
import QuestionTypeView from "@/components/screen-components/customize-game/QuestionTypeView";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS from "@/constants/CONSTANTS";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const CustomizeGameScreen = () => {
    return (
        <PageWithHeader
            showBackButton
        >
            <ScrollView>
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
                    <QuestionCountView isSelected count={5} />
                    <QuestionCountView count={10} />
                    <QuestionCountView count={15} />
                    <QuestionCountView count={20} />

                </View>

                {/* Add customization options here */}
                <Spacer height={20} />
                <Text style={[CONSTANTS.TYPOGRAPHY.h3,]}>
                    Choose Difficulty
                </Text>

                <Spacer height={20} />




                <DifficultyView
                    isSelected={false}
                    label="Easy"
                    description="Casual fun, standard points."
                    onPress={() => { }}
                />

                <DifficultyView
                    isSelected={true}
                    label="Medium"
                    description="Competitive pace, 1.5x bonus."
                    onPress={() => { }}
                />

                <DifficultyView
                    isSelected={false}
                    label="Hard"
                    description="Mastery level, 3x score multiplier."
                    onPress={() => { }}
                />


                <Spacer height={20} />
                <Text style={[CONSTANTS.TYPOGRAPHY.h3,]}>
                    Question Type
                </Text>

                <Spacer height={20} />


                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <QuestionTypeView
                        isSelected
                        onPress={() => { }}
                        text1="Multiple"
                        text2="Choice"
                        icon="list"
                        rotateIconValue="10deg"
                    />
                    <Spacer width={20} />
                    <QuestionTypeView
                        isSelected={false}
                        onPress={() => { }}
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
                        router.replace("/screens/GameScreen");
                    }} />

                <Spacer height={40} />
            </ScrollView>
        </PageWithHeader>
    );
};






const styles = StyleSheet.create({
    questionCountRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        justifyContent: "space-evenly"
    },

});

export default CustomizeGameScreen;