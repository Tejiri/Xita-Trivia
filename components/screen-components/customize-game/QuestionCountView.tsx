import ProfileAvatar from "@/components/ui/ProfileAvater";
import CONSTANTS from "@/constants/CONSTANTS";
import { Text } from "react-native";

interface IQuestionCountView {
    isSelected?: boolean;
    count: number;
}

const QuestionCountView = ({ isSelected, count }: IQuestionCountView) => {
    return (
        <ProfileAvatar
            width={80}
            backgroundColor={isSelected ? CONSTANTS.COLORS.primary.primary8 : CONSTANTS.COLORS.neutral.neutral4} >
            <Text style={[CONSTANTS.TYPOGRAPHY.h4, { color: isSelected ? CONSTANTS.COLORS.primary.white : CONSTANTS.COLORS.neutral.neutral11 }]}>{count}</Text>
        </ProfileAvatar>

    );
};

export default QuestionCountView;