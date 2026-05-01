import PageWithHeader from "@/components/pages/PageWithHeader";
import ArenaComponent from "@/components/play/ArenaComponent";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS from "@/constants/CONSTANTS";
import { useStores } from "@/stores/useStores";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const PlayScreen = () => {
    const { gameSetupStore } = useStores();
    return (

        <PageWithHeader>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
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
                      
                        gameSetupStore.setCategory("General Knowledge");
                        router.push("/screens/CustomizeGameScreen")

                    }}
                    icon="book"
                    title="General Knowledge"
                    subTitle="Broad questions across many topics" />
                <ArenaComponent
                    onPress={() => {
                        gameSetupStore.setCategory("Sports");
                        router.push("/screens/CustomizeGameScreen");
                    }}
                    icon="futbol-o"
                    title="Sports"
                    subTitle="Athletes, games and sporting events"
                    backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
                    iconBackgroundColor={CONSTANTS.COLORS.neutral.neutral8}
                // backgroundColor={CONSTANTS.COLORS.primary.primary3}
                // iconBackgroundColor={CONSTANTS.COLORS.primary.primary9}
                />

                {/* <ArenaComponent icon="flask" title="Science" questionCount={420} /> */}
                <ArenaComponent
                    onPress={() => {
                        gameSetupStore.setCategory("Mythology");
                        router.push("/screens/CustomizeGameScreen");
                    }}
                    icon="empire"
                    title="Mythology"
                    subTitle="Legends, gods and ancient tales" />



                <ArenaComponent
                    onPress={() => {
                        gameSetupStore.setCategory("Science");
                        router.push("/screens/CustomizeGameScreen");
                    }}
                    icon="flask"
                    title="Science"
                    subTitle="Physics, biology and scientific facts"
                    backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
                    iconBackgroundColor={CONSTANTS.COLORS.neutral.neutral8}
                // backgroundColor={CONSTANTS.COLORS.primary.primary3}
                // iconBackgroundColor={CONSTANTS.COLORS.primary.primary9}
                />

                <ArenaComponent
                    onPress={() => {
                        gameSetupStore.setCategory("Art");
                        router.push("/screens/CustomizeGameScreen");
                    }}
                    icon="paint-brush"
                    title="Art"
                    subTitle="Artists, movements and artworks" />



                <ArenaComponent
                    onPress={() => {
                        gameSetupStore.setCategory("Geography");
                        router.push("/screens/CustomizeGameScreen");
                    }}
                    icon="map"
                    title="Geography"
                    subTitle="Countries, capitals and maps"
                    backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
                    iconBackgroundColor={CONSTANTS.COLORS.neutral.neutral8}
                // backgroundColor={CONSTANTS.COLORS.primary.primary3}
                // iconBackgroundColor={CONSTANTS.COLORS.primary.primary9}
                />


                <ArenaComponent
                    onPress={() => {
                        gameSetupStore.setCategory("History");
                        router.push("/screens/CustomizeGameScreen");
                    }}
                    icon="history"
                    title="History"
                    subTitle="People, events and historical milestones"
                // backgroundColor={CONSTANTS.COLORS.primary.primary3}
                // iconBackgroundColor={CONSTANTS.COLORS.primary.primary9}
                />

                <ArenaComponent
                    onPress={() => {
                        gameSetupStore.setCategory("Computers");
                        router.push("/screens/CustomizeGameScreen");
                    }}
                    icon="laptop"
                    title="Computers"
                    subTitle="Tech, programming and computing concepts"
                    backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
                    iconBackgroundColor={CONSTANTS.COLORS.neutral.neutral8}
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