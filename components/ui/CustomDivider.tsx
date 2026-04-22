import { PixelRatio, StyleSheet, View } from "react-native";

interface CustomDividerProps {
    color?: string,
    height?: number,
    marginVertical?: number
}

export default function CustomDivider({ color, height, marginVertical }: CustomDividerProps) {
    // reliable one physical pixel on device
    const onePixel = StyleSheet.hairlineWidth || 1 / PixelRatio.get();
    const h = (height && height > 0) ? Math.max(height, onePixel) : onePixel;

    return (
        <View
            style={[
                styles.divider,
                {
                    backgroundColor: color ?? "white",
                    height: h,
                    marginVertical: marginVertical ?? 15,
                    // ensure full width and override any border-based styling
                    width: "100%",
                },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    divider: {
        opacity: 0.7,
        // keep minimal baseline styling; height will be set dynamically
    }
});