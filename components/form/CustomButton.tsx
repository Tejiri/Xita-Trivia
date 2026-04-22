// ...existing code...
import CONSTANTS from "@/constants/CONSTANTS";
import { Pressable, StyleSheet, Text } from "react-native";

interface ICustomButton {
    buttonText?: string,
    onClick: () => void,
    backgroundColor?: string,
    transparent?: boolean,
    textColor?: string,
    height?: number

    // shadow / elevation props (optional)
    shadow?: boolean;
    elevation?: number;
    shadowStyle?: Record<string, any>;
    shadowRadius?: number;
    shadowOpacity?: number;

}

export default function CustomButton({
    buttonText = "Get Started",
    onClick,
    backgroundColor = CONSTANTS.COLORS.primary.primary8,
    transparent = false,
    textColor,
    height,
    shadow = false,
    elevation,
    shadowStyle,
    shadowRadius = 6,
    shadowOpacity = 0.12,
}: ICustomButton) {
    const bgColor = transparent ? "transparent" : backgroundColor;
    const txtColor = textColor ?? (transparent ? CONSTANTS.COLORS.primary.primary8 : "white");
    const borderStyle = transparent ? { borderWidth: 1, borderColor: CONSTANTS.COLORS.primary.primary8 } : {};

    const computedShadow = shadow
        ? {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: shadowOpacity,
            shadowRadius: shadowRadius,
            elevation: elevation ?? 3,
            ...(shadowStyle ?? {}),
        }
        : {};
    return (
        <Pressable
            style={({ pressed }) =>
                pressed
                    ? [
                        styles.button_view,
                        borderStyle,
                        {
                            opacity: 0.75,
                            backgroundColor: bgColor,
                            height: height ?? null,
                            ...computedShadow,
                        }]
                    : [
                        styles.button_view,
                        borderStyle,
                        {
                            backgroundColor: bgColor,
                            height: height ?? null,
                            ...computedShadow,
                        }]
            }
            onPress={onClick}
        >
            <Text style={[CONSTANTS.TYPOGRAPHY.h3, { color: txtColor, textAlign: "center" }]}>{buttonText}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button_view: {
        padding: 20,
        borderRadius: 15,
        width: "100%",
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    button_text: {
        // default color overridden by inline style
        fontSize: 18,
    },
});
// ...existing