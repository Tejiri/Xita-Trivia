// ...existing code...
import CONSTANTS from "@/constants/CONSTANTS"
import React from "react"
import { Pressable, StyleSheet, Text } from "react-native"

interface CurvedBackgroundProps {
    children: React.ReactNode
    backgroundColor?: string
    title?: string
    marginBottom?: number
    flex?: number
    flexDirection?: "row" | "column"
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "baseline" | "center" | "stretch" | "flex-start" | "flex-end";
    bordered?: boolean
    borderColor?: string
    borderWidth?: number
    borderStyle?: "solid" | "dotted" | "dashed";
    borderRadius?: number
    shadow?: boolean;                 // enable default shadow (iOS) + elevation (Android)
    elevation?: number;               // custom Android elevation / also used to set default shadow intensity
    shadowStyle?: Record<string, any> // optional override/extra shadow styles
    onPress?: () => void;              // optional press handler for making the background touchable
}

export default function CurvedBackground({
    children,
    backgroundColor,
    title,
    marginBottom,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    bordered = false,
    borderColor,
    borderWidth,
    borderStyle,
    borderRadius,
    shadow = false,
    elevation,
    shadowStyle,
    onPress,
}: CurvedBackgroundProps) {
    const computedShadow = shadow
        ? {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.12,
            shadowRadius: 6,
            elevation: elevation ?? 3,
            ...(shadowStyle ?? {}),
        }
        : {};

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.whiteCurvedBackgroundView,
                {
                    backgroundColor: backgroundColor ?? CONSTANTS.COLORS.primary.white,
                    marginBottom,
                    flex: flex ?? 1,
                    flexDirection,
                    justifyContent,
                    alignItems,
                    borderRadius: borderRadius ?? 15,
                    ...(bordered
                        ? {
                            borderWidth: borderWidth ?? 0.5,
                            borderColor: borderColor ?? CONSTANTS.COLORS.neutral.neutral5,
                            borderStyle: borderStyle ?? "solid",
                        }
                        : {}),
                    ...computedShadow,
                },
            ]}
        >
            {title ? <Text style={[CONSTANTS.TYPOGRAPHY.h4, { marginBottom: marginBottom ?? 15 }]}>{title}</Text> : null}
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    whiteCurvedBackgroundView: {
        flexDirection: "column",
        backgroundColor: CONSTANTS.COLORS.primary.white,
        padding: 20,

    },
})
