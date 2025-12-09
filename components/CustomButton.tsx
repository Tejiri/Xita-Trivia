import CONSTANTS from "@/constants/Constants";
import Ionicons from '@expo/vector-icons/Ionicons';
import { observer } from "mobx-react-lite";
import { Pressable, StyleSheet, Text, View } from "react-native";


interface CustomButtonProps {
    buttonText?: string,
    onPress?: () => void,
    showLeadingIcon?: boolean,
    showTrailingIcon?: boolean,
    transparent?: boolean
}

const CustomButton = observer(({ buttonText, onPress, showLeadingIcon, showTrailingIcon, transparent }: CustomButtonProps) => {

    return (
      <Pressable
        style={({ pressed }) => [styles.buttonContainer, pressed && styles.buttonPressed, transparent && styles.transparentButtonContainer]}
        onPress={onPress}
      >
        <View style={styles.inner}>
          {showLeadingIcon ? <Ionicons name="play-outline" size={24} color={CONSTANTS.COLORS.textColors.purple600} style={styles.icon} /> : null}
          <Text style={[CONSTANTS.TYPOGRAPHY.h3, styles.buttonText, { color: transparent ? CONSTANTS.COLORS.textColors.white : CONSTANTS.COLORS.textColors.purple600 }]}>
            {buttonText}
          </Text>
          {showTrailingIcon ? <Ionicons name="play-outline" size={24} color={CONSTANTS.COLORS.textColors.purple600} style={styles.icon} /> : null}
        </View>
      </Pressable>
    );
})
// ...existing code...

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "white",
        borderRadius: 100,
        width: "100%",
    },

    inner: {
        flexDirection: "row",
        alignItems: "center",      // vertical center
        justifyContent: "center",
        paddingHorizontal: 50,
        paddingVertical: 20,       // slightly smaller vertical padding
    },

    icon: {
        marginHorizontal: 8,
    },

    buttonText: {
        marginHorizontal: 8,
        lineHeight: 28,            // helps vertically align text with icon
        textAlign: "center",
    },

    buttonPressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
    },

    transparentButtonContainer: {
    backgroundColor: "rgba(255,255,255,0.3)", // use rgba for background only
    borderRadius: 100,
    width: "100%",
  }
});
// ...existing code...

export default CustomButton;