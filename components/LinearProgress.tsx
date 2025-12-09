import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

type Props = {
  progress: number; // 0..1
  height?: number;
  color?: string;
  backgroundColor?: string;
  duration?: number;
};

export default function LinearProgress({
  progress,
  height = 10,
  color = "#ffffffff",
  backgroundColor = "rgba(255,255,255,0.12)",
  duration = 300,
}: Props) {
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: Math.max(0, Math.min(1, progress)),
      duration,
      useNativeDriver: false,
    }).start();
  }, [progress, animated, duration]);

  const widthInterpolated = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={[styles.container, { height, backgroundColor }]}>
      <Animated.View style={[styles.fill, { backgroundColor: color, width: widthInterpolated, height }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 999,
    overflow: "hidden",
  },
  fill: {
    borderRadius: 999,
  },
});