import CONSTANTS from "@/constants/Constants";
import { gameSetupStore } from "@/models/GameSetupStore";
import { observer } from "mobx-react-lite";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Spacer from "./Spacer";



interface CategoryCardProps {
    icon?: any,
    title: string,
    onPress?: () => void
}


const CategoryCard = observer(({ icon, title, onPress }: CategoryCardProps) => {
    return <Pressable style={gameSetupStore.category === title ? styles.selectedCategoryCardColumn : styles.categoryCardColumn} onPress={() => {
        console.log(`CategoryCard pressed: ${title}`);
        gameSetupStore.updateSetup(title, gameSetupStore.difficulty);
         console.log(`CategoryCard pressed: ${gameSetupStore.categoryNumber}`);
    }}>
        {icon == null ? null :
            <View>
                <Text style={CONSTANTS.TYPOGRAPHY.h1}>{icon}</Text>
                <Spacer height={15} />
            </View>
        }

       
        {icon == null ? <Text
            style={
                [CONSTANTS.TYPOGRAPHY.h3, { textAlign: "center" }]
            }>{title}</Text> :
            <Text
                style={
                   gameSetupStore.category === title ? [CONSTANTS.TYPOGRAPHY.h3, styles.selectedCategoryText] : CONSTANTS.TYPOGRAPHY.h3
                }>{title}</Text>}
    </Pressable>;
})

const styles = StyleSheet.create({
    categoryCardColumn: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'flex-start',
        backgroundColor: CONSTANTS.COLORS.backgrounds.bgWhite20,
        padding: 20,
        borderRadius: 30,
    },

    selectedCategoryCardColumn: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'flex-start',
        backgroundColor: CONSTANTS.COLORS.textColors.white,
        padding: 20,
        borderRadius: 30,
    },

    selectedCategoryText: {
        color: CONSTANTS.COLORS.textColors.purple600,
    }


});

export default CategoryCard;

