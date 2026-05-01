import CONSTANTS, { FontAwesomeIconName, GameCategory, IonIconName } from "@/constants/CONSTANTS";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import CurvedBackground from "../CurvedBackround";
import ProfileAvatar from "../ui/ProfileAvater";
import Spacer from "../ui/Spacer";

interface IArenaComponent {
    icon: FontAwesomeIconName | IonIconName;
    title: GameCategory;
    subTitle: string;
    backgroundColor?: string;
    iconBackgroundColor?: string;
    onPress?: () => void;
}

const ArenaComponent = ({ icon, title, subTitle, backgroundColor, iconBackgroundColor = CONSTANTS.COLORS.primary.primary8, onPress }: IArenaComponent) => {
    return (
        <View>
            <CurvedBackground
                onPress={onPress}
                flexDirection="row"
                alignItems="center"
                backgroundColor={backgroundColor}
                elevation={10}
                shadow={true}
                shadowStyle={{
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                }}
            >
                <ProfileAvatar
                    backgroundColor={iconBackgroundColor}
                >
                    <FontAwesome name={icon as FontAwesomeIconName} size={24} color={CONSTANTS.COLORS.primary.white} />
                </ProfileAvatar>
                <Spacer width={20} />
                <View style={{ flex: 1 }}>
                    <Text style={CONSTANTS.TYPOGRAPHY.h4}>{title}</Text>
                    <Text>{subTitle}</Text>
                </View>

                <Ionicons name="arrow-forward" size={24} color={CONSTANTS.COLORS.neutral.neutral6} />
            </CurvedBackground>

            <Spacer height={20} />
        </View>
    );
};

export default ArenaComponent;
