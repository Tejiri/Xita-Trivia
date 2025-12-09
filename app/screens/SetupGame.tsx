import GradientBackground from "@/components/backgrounds/GradientBackground";
import CustomButton from "@/components/CustomButton";
import DifficultyCard from "@/components/DifficultyCard";
import SetupGameRow from "@/components/SetupGameRow";
import Spacer from "@/components/Spacer";
import CONSTANTS from "@/constants/Constants";
import { gameSetupStore } from "@/models/GameSetupStore";
import { questionStore } from "@/models/QuestionStore";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const SetupGame = observer(() => {
    return <GradientBackground>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >

            <Pressable onPress={() => {
                router.back(); // or
            }}>
                <Text style={CONSTANTS.TYPOGRAPHY.body}>← Back</Text>
            </Pressable>


            <Spacer height={10} />


            <Text style={CONSTANTS.TYPOGRAPHY.h2}>Setup Game</Text>
            <Spacer height={40} />
            <Text style={CONSTANTS.TYPOGRAPHY.h3}>Choose Category</Text>
            <Spacer height={20} />
            <SetupGameRow
                firstCategoryIcon={CONSTANTS.EMOJIS.categories.generalKnowledge}
                secondCategoryIcon={CONSTANTS.EMOJIS.categories.sports}
                firstCategoryTitle={CONSTANTS.CATEGORIES.generalKnowledge}
                secondCategoryTitle={CONSTANTS.CATEGORIES.sports}
            />

            <SetupGameRow
                firstCategoryIcon={CONSTANTS.EMOJIS.categories.history}
                secondCategoryIcon={CONSTANTS.EMOJIS.categories.computers}
                firstCategoryTitle={CONSTANTS.CATEGORIES.history}
                secondCategoryTitle={CONSTANTS.CATEGORIES.computers}
            />

            <SetupGameRow
                firstCategoryIcon={CONSTANTS.EMOJIS.categories.animals}
                secondCategoryIcon={CONSTANTS.EMOJIS.categories.film}
                firstCategoryTitle={CONSTANTS.CATEGORIES.animals}
                secondCategoryTitle={CONSTANTS.CATEGORIES.film}
            />
            <Spacer height={20} />
            <Text style={CONSTANTS.TYPOGRAPHY.h3}>Difficulty</Text>
            <Spacer height={20} />
            <View style={styles.difficultyRow}>
                <DifficultyCard title="Easy" />
                <Spacer height={20} />
                <DifficultyCard title="Medium" />
                <Spacer height={20} />
                <DifficultyCard title="Hard" />

                <Spacer height={40} />
               <CustomButton
  buttonText="Start Quiz    >"
  onPress={async () => {
    console.log("Start Game Pressed", gameSetupStore.difficulty, gameSetupStore.categoryNumber);
    const ok = await questionStore.fetchQuestions(10, gameSetupStore.categoryNumber!, gameSetupStore.difficulty!);
    if (ok) {
      // adjust path to your quiz route (e.g. "/quiz" or "/screens/Quiz")
      router.replace("/screens/Questions");
    } else {
    //   console.error("Failed to fetch questions:", questionStore.error);
      // optionally show UI feedback
    }
  }}
/>
            </View>
        </ScrollView>
    </GradientBackground>
})


const styles = StyleSheet.create({
    difficultyRow: {
        flexDirection: 'column',
        // flexWrap: 'wrap',
    }
});

export default SetupGame;
