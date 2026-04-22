import PageWithHeader from "@/components/pages/PageWithHeader";
import ArenaComponent from "@/components/play/ArenaComponent";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS from "@/constants/CONSTANTS";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
const PlayScreen = () => {
    return (

        <PageWithHeader>
            <ScrollView>
                <View style={styles.pickArenaView}>
                    <Text
                        style={[CONSTANTS.TYPOGRAPHY.h1,]}
                    >
                        Pick your
                    </Text>
                    <Spacer width={10} />
                    <Text

                        style={[CONSTANTS.TYPOGRAPHY.h1, styles.arenaStyle]}
                    >
                        Arena
                    </Text>
                </View>
                <Spacer height={5} />
                <Text style={[CONSTANTS.TYPOGRAPHY.h5, { color: CONSTANTS.COLORS.neutral.neutral9 }]}>
                    Knowledge is power. Choose a challenge.
                </Text>

                <Spacer height={25} />

                <ArenaComponent 
                onPress={() => {
                    router.push("/screens/CustomizeGameScreen")
                }}
                icon="book" 
                title="GENERAL KNOWLEDGE" 
                questionCount={420} />
                <ArenaComponent
                    icon="futbol-o"
                    title="SPORTS"
                    questionCount={420}
                     backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
                    iconBackgroundColor={CONSTANTS.COLORS.neutral.neutral8}
                    // backgroundColor={CONSTANTS.COLORS.primary.primary3}
                    // iconBackgroundColor={CONSTANTS.COLORS.primary.primary9}
                />

                {/* <ArenaComponent icon="flask" title="Science" questionCount={420} /> */}
                <ArenaComponent icon="empire" title="MYTHOLOGY" questionCount={420} />



                <ArenaComponent
                    icon="flask"
                    title="SCIENCE"
                    questionCount={420}
                     backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
                    iconBackgroundColor={CONSTANTS.COLORS.neutral.neutral8}
                    // backgroundColor={CONSTANTS.COLORS.primary.primary3}
                    // iconBackgroundColor={CONSTANTS.COLORS.primary.primary9}
                />

                <ArenaComponent icon="paint-brush" title="ART" questionCount={420} />



                <ArenaComponent
                    icon="map"
                    title="GEOGRAPHY"
                    questionCount={420}
                     backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
                    iconBackgroundColor={CONSTANTS.COLORS.neutral.neutral8}
                    // backgroundColor={CONSTANTS.COLORS.primary.primary3}
                    // iconBackgroundColor={CONSTANTS.COLORS.primary.primary9}
                />


                <ArenaComponent
                    icon="history"
                    title="HISTORY"
                    questionCount={420}
                    
                    // backgroundColor={CONSTANTS.COLORS.primary.primary3}
                    // iconBackgroundColor={CONSTANTS.COLORS.primary.primary9}
                />

            </ScrollView>
        </PageWithHeader>
    );
};


const styles = StyleSheet.create(
    {
        pickArenaView: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },

        arenaStyle: {
            color: CONSTANTS.COLORS.primary.primary9,
            fontStyle: "italic"
        }
    }
);
export default PlayScreen;