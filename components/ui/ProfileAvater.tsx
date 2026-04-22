import CONSTANTS from "@/constants/CONSTANTS";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IProfileAvatar {
    // size?: number;
    children?: React.ReactNode;
    backgroundColor?: string;
    height?: number;
    width?: number;
    /**
     * Optional custom radius. Will be capped to half of the width/height
     * to ensure the avatar remains a circle.
     */
    borderRadius?: number;
}

const ProfileAvatar = ({ height = 60, width = 60, children, backgroundColor, borderRadius = 30 }: IProfileAvatar) => {
    // const dimension = Math.max(0, size);
    // const safeRadius = borderRadius !== undefined ? Math.min(borderRadius, dimension / 2) : dimension / 2;
    // const initialsFontSize = Math.max(12, Math.round(dimension / 2.6));

    return (
        <View
            style={[
                styles.memberAvatar,
                {
                    height: height,
                    width: width,
                    borderRadius: borderRadius,
                    backgroundColor: backgroundColor ?? CONSTANTS.COLORS.primary.primary6,
                    overflow: "hidden",
                },
            ]}
        >
            {children ? (
                children
            ) : (
                null
                // <Text style={[CONSTANTS.TYPOGRAPHY.h3, { color: CONSTANTS.COLORS.primary.primary6, }]}>
                //     JD
                // </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    memberAvatar: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ProfileAvatar;