
import CONSTANTS from "@/constants/Constants"
import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


interface GradientBackgroungProps {
    children: React.ReactNode
}

export default function GradientBackground({ children }: GradientBackgroungProps) {
    return <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[CONSTANTS.COLORS.gradientBackground.purple, CONSTANTS.COLORS.gradientBackground.blue, CONSTANTS.COLORS.gradientBackground.indigo]}
        style={styles.mainContainer}
    >
      <SafeAreaView>
          {children}
      </SafeAreaView>
    </LinearGradient>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding:30
        // flexDirection: 'column',
    }
});