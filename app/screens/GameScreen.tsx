import PageWithHeader from "@/components/pages/PageWithHeader";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS from "@/constants/CONSTANTS";
import { ScrollView, Text, View } from "react-native";


const GameScreen = () => {
    return (
        <PageWithHeader
            showBackButton
        >
            <ScrollView>

                <View
                    style={{
                        backgroundColor: CONSTANTS.COLORS.neutral.neutral4,
                        width: "100%",
                        height: 20,
                        borderRadius: 20
                    }}
                >
                    <View style={{
                        backgroundColor: CONSTANTS.COLORS.primary.primary9,
                        width: "35%",
                        height: 20,
                        borderRadius: 20
                    }}
                    />
                </View>


<Spacer height={30}/>

                <View style={{
                    backgroundColor: CONSTANTS.COLORS.neutral.neutral4,
                   
                    borderRadius: 20
                }} >
                    <Text>Question 05/10</Text>
                </View>
                <Text style={[CONSTANTS.TYPOGRAPHY.h1, { textAlign: "center" }]}>Game Screen</Text>
            </ScrollView>
        </PageWithHeader>
    );
};

export default GameScreen;