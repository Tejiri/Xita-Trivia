import CurvedBackground from "@/components/CurvedBackround";
import ProfileAvatar from "@/components/ui/ProfileAvater";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS from "@/constants/CONSTANTS";
import { StyleSheet, Text, View } from "react-native";

interface IDifficultyView {
    onPress: () => void;
    isSelected?: boolean;
    label: "Easy" | "Medium" | "Hard";
    description: string;
}

const DifficultyView = ({ isSelected, label, description, onPress }: IDifficultyView) => {
    return (
        <View>
            <CurvedBackground
                backgroundColor={isSelected ? CONSTANTS.COLORS.primary.primary8 : CONSTANTS.COLORS.neutral.neutral3}
                flexDirection="row"
                alignItems="center"
                borderRadius={30}
                onPress={onPress}
            >
                <ProfileAvatar
                    backgroundColor={isSelected ? CONSTANTS.COLORS.primary.primary3 : CONSTANTS.COLORS.primary.white}
                >
                    <Text style={[CONSTANTS.TYPOGRAPHY.h2]}>
                        {label === "Easy" ? "😃" : label === "Medium" ? "😐" : "😠"}
                    </Text>
                </ProfileAvatar>

                <Spacer width={15} />

                <View style={{ flex: 1 }}>
                    <Text style={[CONSTANTS.TYPOGRAPHY.h4, { color: isSelected ? CONSTANTS.COLORS.primary.white : CONSTANTS.COLORS.primary.black }]}>{label}</Text>
                    <Text style={[CONSTANTS.TYPOGRAPHY.body, { color: isSelected ? CONSTANTS.COLORS.primary.white : CONSTANTS.COLORS.neutral.neutral9 }]}>{description}</Text>
                </View>

                <ProfileAvatar
                    backgroundColor={CONSTANTS.COLORS.primary.white}
                   size={40}
                >
                    {isSelected ?
                        <View
                            style={styles.selectedDifficultyIndicator}
                        >

                        </View> : <Text></Text>}
                </ProfileAvatar>
            </CurvedBackground>
            <Spacer height={20} />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        selectedDifficultyIndicator: {
            height: 25,
            width: 25,
            backgroundColor: CONSTANTS.COLORS.primary.primary9,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center"
        }
    }
)

export default DifficultyView;