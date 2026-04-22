import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";

type ILoadingOverlay = {
  visible: boolean;
};

export default function LoadingOverlay({ visible }: ILoadingOverlay) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent={true} // helps on Android to cover status bar area
    >
      <View style={styles.overlay}>
        <View style={styles.box}>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    padding: 18,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
});

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.4)", // semi-transparent background
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
