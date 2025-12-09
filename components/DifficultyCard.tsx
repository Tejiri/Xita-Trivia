import CONSTANTS from "@/constants/Constants";
import { gameSetupStore } from "@/models/GameSetupStore";
import { observer } from "mobx-react-lite";
import { Pressable, StyleSheet, Text } from "react-native";

interface DifficultyCardProps {
    title: string,
    onPress?: () => void
}


const DifficultyCard = observer(({ title, onPress }: DifficultyCardProps) => {
    return <Pressable style={gameSetupStore.difficulty?.toLowerCase() === title.toLowerCase() ? styles.selectedDifficultyCardColumn : styles.difficultyCardColumn} onPress={() => {
        console.log(`CategoryCard pressed: ${title}`);
        gameSetupStore.updateSetup(gameSetupStore.category, title);
    }}>

        <Text
            style={
                gameSetupStore.difficulty?.toLowerCase() === title.toLowerCase() ? [CONSTANTS.TYPOGRAPHY.h3, styles.selectedCategoryText] : CONSTANTS.TYPOGRAPHY.h3
            }>{title}</Text>
    </Pressable>
});

const styles = StyleSheet.create({
    difficultyCardColumn: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'flex-start',
        backgroundColor: CONSTANTS.COLORS.backgrounds.bgWhite20,
        padding: 20,
        borderRadius: 30,
    },

    selectedDifficultyCardColumn: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'flex-start',
        backgroundColor: CONSTANTS.COLORS.textColors.white,
        padding: 20,
        borderRadius: 30,
    },

    selectedCategoryText: {
        color: CONSTANTS.COLORS.textColors.purple600,
        textAlign: 'center'
    }


});

export default DifficultyCard;

