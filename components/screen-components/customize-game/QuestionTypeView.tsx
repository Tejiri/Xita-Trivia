import ProfileAvatar from "@/components/ui/ProfileAvater";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS, { IonIconName } from "@/constants/CONSTANTS";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
interface IQuestionTypeView {
    onPress: () => void;
    isSelected?: boolean;
    // alignItems: "flex-start" | "center" | "flex-end";
    text1: "Multiple" | "True /";
    text2: "Choice" | "False";
    icon: IonIconName;
    rotateIconValue: "10deg" | "-10deg";
}

const QuestionTypeView = ({ onPress, isSelected, text1, text2, icon, rotateIconValue }: IQuestionTypeView) => {
    return (
        <View
            style={
                {
                    backgroundColor: isSelected ? CONSTANTS.COLORS.primary.primary7 : CONSTANTS.COLORS.neutral.neutral3,
                    flex: 1,
                    borderRadius: 20,
                    padding: 20
                }
            }
        >
            {/* <Spacer height={30} /> */}
            <View
                style={{
                    alignItems: isSelected ? "flex-end" : "flex-start",
                    transform: [{ rotate: isSelected ? "10deg" : "-10deg" }]
                }}
            >
                <ProfileAvatar
                    backgroundColor={CONSTANTS.COLORS.primary.white}
                    height={60}
                    width={60}
                    borderRadius={15}
                >
                    <Ionicons name={icon} size={30} color={CONSTANTS.COLORS.primary.primary9} />

                </ProfileAvatar>
            </View>
            <Spacer height={40} />

            <Text
                style={[CONSTANTS.TYPOGRAPHY.h2, { color: isSelected ? CONSTANTS.COLORS.primary.white : CONSTANTS.COLORS.primary.black }]} >
                {text1}
            </Text>
            <Text style={[CONSTANTS.TYPOGRAPHY.h2, { color: isSelected ? CONSTANTS.COLORS.primary.white : CONSTANTS.COLORS.primary.black }]} >
                {text2}
            </Text>
            <Spacer height={7} />
            <View
                style={{
                    width: isSelected ? "50%" : "30%",
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: isSelected ? CONSTANTS.COLORS.primary.primary10 : CONSTANTS.COLORS.neutral.neutral5,
                }}
            >

            </View>

            <Spacer height={10} />
        </View>

    );
};

export default QuestionTypeView;