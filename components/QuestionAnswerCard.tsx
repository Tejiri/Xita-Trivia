import CONSTANTS from "@/constants/Constants";
import { Pressable, StyleSheet, Text } from "react-native";


interface QuestionAnswerCardProps {
    type?: 'question' | 'answer',
    title: string,
    onPress?: () => void,
    displayType: "success" | "neutral" | "error",
    disabled: true | false
}

const QuestionAnswerCard = ({ type, title, onPress, displayType, disabled }: QuestionAnswerCardProps) => {
    return <Pressable
        style=
        {displayType === 'success' ? styles.successContainer :
                displayType === 'error' ? styles.errorContainer :
                    disabled === true ? styles.disabledContainer : styles.mainContainer
        }

        onPress={() => {
            if (!disabled && onPress) {
                onPress();
            }
        }}>

        <Text style={[type === "question" ? CONSTANTS.TYPOGRAPHY.h3 : CONSTANTS.TYPOGRAPHY.h4, { color: "black" }]}>{title}</Text>
    </Pressable>
};

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
    },

    successContainer: {
        padding: 20,
        backgroundColor: CONSTANTS.COLORS.answerStates.bgGreen,
        color: "white",
        borderRadius: 15,
        marginBottom: 20,
    },

    errorContainer: {
        padding: 20,
        backgroundColor: CONSTANTS.COLORS.answerStates.bgRed,
        color: "white",
        borderRadius: 15,
        marginBottom: 20,
    },

    disabledContainer: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
        opacity: 0.5,
    }
});

export default QuestionAnswerCard;