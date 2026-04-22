import CONSTANTS from "@/constants/CONSTANTS";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileAvatar from "../ui/ProfileAvater";
import Spacer from "../ui/Spacer";

interface IPageWithHeader {
    children: React.ReactNode
    showBackButton?: boolean
}
const PageWithHeader = ({ children, showBackButton = false }: IPageWithHeader) => {
    return (
        <SafeAreaView edges={["top", "left", "right",]} style={styles.safeAreaView}>
            <View style={styles.headerMainView}>
                <View style={styles.backButtonRow}>
                    {showBackButton
                        && <Pressable
                            onPress={() => { 
                                router.back();
                            }}
                        >
                            <Ionicons name="arrow-back" size={24} color={CONSTANTS.COLORS.primary.primary9} />
                        </Pressable>}
                    <Spacer width={10} />
                    <Text style={[CONSTANTS.TYPOGRAPHY.h2, { color: CONSTANTS.COLORS.primary.primary9 }]}>
                        QuizQuest
                    </Text>
                </View>


                <ProfileAvatar

                    height={55}
                    width={55}
                >

                    <Image
                        style={styles.avatar}
                        source={require("../../assets/images/avatar-placeholder.png")}
                        // style={styles.avatar}
                        resizeMode="cover"
                    />
                    {/* <Image src="assets/images/avatar-placeholder.png" /> */}
                </ProfileAvatar>
            </View>

            <View style={styles.pageView}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        safeAreaView: {
            flex: 1,
            backgroundColor: CONSTANTS.COLORS.primary.white,
        },

        backButtonRow: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        headerMainView: {

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,

            backgroundColor: CONSTANTS.COLORS.primary.white
        },

        pageView: {
            flex: 1,
            backgroundColor: CONSTANTS.COLORS.neutral.neutral2,
            paddingHorizontal: 20,
            paddingVertical: 20
        },

        avatar: {
            width: 50,
            height: 50,
            borderRadius: 30,
        }
    }
)

export default PageWithHeader;