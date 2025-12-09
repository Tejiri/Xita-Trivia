import GradientBackground from "@/components/backgrounds/GradientBackground";
import CustomButton from "@/components/CustomButton";
import Spacer from "@/components/Spacer";
import CONSTANTS from "@/constants/Constants";
import { gameSetupStore } from "@/models/GameSetupStore";
import { questionStore } from "@/models/QuestionStore";
import { router, useLocalSearchParams } from "expo-router";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Results = observer(() => {
    const { score } = useLocalSearchParams();
    useEffect(() => {
        console.log("Score received in Results screen:", score);
    }, [score]);
    return <GradientBackground>

        {/* <ScrollView > */}
        <View style={styles.mainContent}>
            <Text style={CONSTANTS.TYPOGRAPHY.h2}>Quiz Complete</Text>
            <Spacer height={20} />


            <Text style={CONSTANTS.TYPOGRAPHY.h1}>{score + "/" + questionStore.response.results.length}</Text>
            <Spacer height={20} />

            <Text style={CONSTANTS.TYPOGRAPHY.body}>{(Number(score) / questionStore.response.results.length) * 100}% Correct</Text>
            <Spacer height={30} />

            <CustomButton
                buttonText="Play Again"
                onPress={() => {
                    questionStore.resetStore();
                    gameSetupStore.resetSetup();
                    router.replace("/screens/SetupGame");
                }}
            />

            <Spacer height={20} />

            <CustomButton buttonText="Home" transparent={true}
                onPress={() => {
                     questionStore.resetStore();
                    gameSetupStore.resetSetup();
                    router.replace("/");
                }} />
        </View>

        {/* </ScrollView> */}

    </GradientBackground>
});

const styles = StyleSheet.create({

    mainContent: {
        justifyContent: 'center',
        alignItems: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
        width: "100%",
        height: "100%",
        // backgroundColor: 'green',
        // flex: 1,
    }
});

export default Results;