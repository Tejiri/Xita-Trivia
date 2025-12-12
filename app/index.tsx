import CustomButton from "@/components/CustomButton";
import Spacer from "@/components/Spacer";
import CONSTANTS from "@/constants/Constants";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientBackground from "../components/backgrounds/GradientBackground";

const Index = observer(() => {

    return <GradientBackground>
        <SafeAreaView>

        </SafeAreaView>

        <ScrollView >
            <View style={styles.mainContent}>
                <Text style={styles.appIcon}>{CONSTANTS.EMOJIS.appIcon}</Text>

                <Text style={CONSTANTS.TYPOGRAPHY.h1}>Xita Trivia</Text>

                <Spacer height={10} />

                <Text style={CONSTANTS.TYPOGRAPHY.body}>Test yout knowledge</Text>
                <Spacer height={20} />
                <CustomButton buttonText="Start Game" showLeadingIcon={true} onPress={() => {

                    console.log("Start Game Pressed");
                    // router.push({pathname:"/screens/Results", params: {score: 5}});
                    router.push("/screens/SetupGame");
                }} />
            </View>



            <Spacer height={50} />

        </ScrollView>
    </GradientBackground>
})

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: 50,
        alignItems: 'center',
    },

    appIcon: {
        fontSize: 100,
    }
});

export default Index;