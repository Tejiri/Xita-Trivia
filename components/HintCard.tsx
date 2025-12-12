import CONSTANTS from "@/constants/Constants";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

interface HintCardProps {
    hintText?: string | null,
    onPress?: () => void,
    displayHint?: boolean | null,
    isLoading?: boolean

}

const HintCard = ({ hintText, onPress, displayHint = false, isLoading = false }: HintCardProps) => {

    return (
        displayHint ?
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[CONSTANTS.COLORS.backgrounds.hintGradientStart, CONSTANTS.COLORS.backgrounds.hintGradientEnd,]}
                style={styles.cardWithHnt}
            >
                <Text style={[CONSTANTS.TYPOGRAPHY.h4, { color: "white" }]}>{CONSTANTS.EMOJIS.ui.hint} Hint:</Text>
                <Text style={[CONSTANTS.TYPOGRAPHY.h4, { color: "white" }]}>{hintText}</Text>

            </LinearGradient> :
            <Pressable style={styles.cardContainer} onPress={onPress}>

                {isLoading ? <View style={styles.spinnerWrap}>

                    <ActivityIndicator size="small" color="rgba(0, 0, 0, 0.95)" />
                </View>

                    : <Text style={CONSTANTS.TYPOGRAPHY.h4}>{CONSTANTS.EMOJIS.ui.hint} Get a Hint</Text>}


            </Pressable>

    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: CONSTANTS.COLORS.backgrounds.hintCard,
        borderRadius: 20,
        padding: 20,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
    },

    cardWithHnt: {
        backgroundColor: CONSTANTS.COLORS.backgrounds.hintCard,
        borderRadius: 20,
        padding: 20,
        textAlign: "center",
        justifyContent: "center",
        // alignItems: "center",
        // width: "100%",
    },
    spinnerWrap: {
        marginTop: 8,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default HintCard;