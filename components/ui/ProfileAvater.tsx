import CONSTANTS from "@/constants/CONSTANTS";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface IProfileAvatar {
    onPress?:()=>void;
    size?: number | "auto";
    children?: React.ReactNode;
    backgroundColor?: string;
    flex?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    alignSelf?: "flex-start" | "flex-end" | "center" | "auto" | "stretch" | "baseline";
    borderWidth?: number;
    borderColor?: string;
    borderStyle?: "solid" | "dotted" | "dashed";
    /**
     * Optional custom radius. Will be capped to half of the width/height
     * to ensure the avatar remains a circle.
     */
    borderRadius?: number;
}

const ProfileAvatar = ({
    size = 60,
    children,
    backgroundColor,
    borderRadius,
    flex,
    paddingHorizontal,
    paddingVertical,
    alignSelf,
    borderWidth,
    borderColor,
    borderStyle,
    onPress
}: IProfileAvatar) => {
    const dimension = Math.max(0, size === "auto" ? 60 : size);
    const safeRadius = borderRadius !== undefined ? Math.min(borderRadius, dimension / 2) : dimension / 2;
    const initialsFontSize = Math.max(12, Math.round(dimension / 2.6));

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.memberAvatar,

                {
                    alignSelf,
                    paddingHorizontal,
                    paddingVertical,
                    borderWidth,
                    borderColor,
                    borderStyle,
                    height: size === "auto" ? "auto" : size,
                    width: size === "auto" ? "auto" : size,
                    flex,
                    borderRadius: safeRadius,
                    backgroundColor: backgroundColor ?? CONSTANTS.COLORS.primary.primary4,
                    overflow: "hidden",
                },
            ]}
        >
            {children ? (
                children
            ) : (
                <Text style={[CONSTANTS.TYPOGRAPHY.h3, { color: CONSTANTS.COLORS.primary.primary9, fontSize: initialsFontSize }]}>
                    JD
                </Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    memberAvatar: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ProfileAvatar;