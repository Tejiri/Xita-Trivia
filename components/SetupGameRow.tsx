import { StyleSheet, View } from "react-native";
import CategoryCard from "./CategoryCard";
import Spacer from "./Spacer";

interface SetupGameRowProps {
    firstCategoryIcon?: any,
    firstCategoryTitle: string,
    secondCategoryIcon?: any,
    secondCategoryTitle: string,
}

const SetupGameRow = (
    {   firstCategoryIcon,
        firstCategoryTitle,
        secondCategoryIcon,
        secondCategoryTitle }: SetupGameRowProps) => {
    return <View style={styles.categoryRow}>

            <CategoryCard icon={firstCategoryIcon} title={firstCategoryTitle} />
            <Spacer width={20} />
            <CategoryCard icon={secondCategoryIcon} title={secondCategoryTitle} />

            {/* <CategoryCard /> */}
        </View>;
}

const styles = StyleSheet.create({
    categoryRow: {
        flexDirection: 'row',
        marginBottom: 20,
    }
});
export default SetupGameRow;