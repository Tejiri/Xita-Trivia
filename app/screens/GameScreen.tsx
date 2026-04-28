import CurvedBackground from "@/components/CurvedBackround";
import CustomButton from "@/components/form/CustomButton";
import PageWithHeader from "@/components/pages/PageWithHeader";
import ProfileAvatar from "@/components/ui/ProfileAvater";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS from "@/constants/CONSTANTS";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, Text, View } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


const GameScreen = () => {
    return (
        <PageWithHeader
            showBackButton
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Spacer height={10} />
                <View
                    style={{
                        backgroundColor: CONSTANTS.COLORS.neutral.neutral4,
                        width: "100%",
                        height: 15,
                        borderRadius: 20
                    }}
                >
                    <View style={{
                        backgroundColor: CONSTANTS.COLORS.primary.primary9,
                        width: "35%",
                        height: 15,
                        borderRadius: 20
                    }}
                    />
                </View>


                <Spacer height={30} />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >

                    <View>
                        <ProfileAvatar
                            backgroundColor={CONSTANTS.COLORS.secondary.secondary3}
                            size={"auto"}
                            paddingHorizontal={10}
                            paddingVertical={5}>
                            <Text>Question 05/10</Text>
                        </ProfileAvatar>


                        <Text
                            style={[CONSTANTS.TYPOGRAPHY.h5, { color: CONSTANTS.COLORS.neutral.neutral5 }]}
                        >World Capitals</Text>

                    </View>

                    <CountdownCircleTimer
                        isPlaying
                        duration={20}
                        colors={['#6700B5', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[20, 10, 5, 0]}
                        size={60}
                        strokeWidth={5}
                        onComplete={() => {
                            // do your stuff here
                            return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
                        }}
                    >
                        {({ remainingTime }) => <Text
                            style={[CONSTANTS.TYPOGRAPHY.h5, { textAlign: "center" }]}
                        >{remainingTime}</Text>}
                    </CountdownCircleTimer>
                </View>

                <Spacer height={30} />
                <CurvedBackground
                    shadow
                >
                    <Text style={[CONSTANTS.TYPOGRAPHY.h2,]}>
                        What is the capital city of France?
                    </Text>
                    <Spacer height={20} />
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Ionicons name="bulb-outline" size={24} color={CONSTANTS.COLORS.primary.primary9} />
                        <Text style={[CONSTANTS.TYPOGRAPHY.body, { color: CONSTANTS.COLORS.neutral.neutral6, marginLeft: 10 }]}>
                            Hint: It's known as the City of Light.
                        </Text>
                    </View>
                </CurvedBackground>

                <Spacer height={30} />

                <AnswerListItem letter="A" answer="Lyon" isSelected={false} />
                <AnswerListItem letter="B" answer="Marseille" isSelected={true} correctAnswer={false} />
                <AnswerListItem letter="C" answer="Paris" isSelected={false} correctAnswer={true} />
                <AnswerListItem letter="D" answer="Nice" isSelected={false} />

                <CustomButton
                    onClick={() => { }}
                    buttonText="Next Question"
                />
            </ScrollView>
        </PageWithHeader>
    );
};

interface IAnswerListItem {
    onPress?: () => void;
    letter: string;
    answer: string;
    isSelected?: boolean;
    correctAnswer?: boolean | null;
}

const AnswerListItem = ({ letter, answer, isSelected, correctAnswer = null, onPress }: IAnswerListItem) => {
    return <View>
        <CurvedBackground
            onPress={onPress}
            borderRadius={100}
            flexDirection="row"
            alignItems="center"
            backgroundColor={
                correctAnswer === null ? CONSTANTS.COLORS.primary.white
                    : correctAnswer
                        ? CONSTANTS.COLORS.answerStates.bgGreen
                        : isSelected != correctAnswer
                            ? CONSTANTS.COLORS.answerStates.bgRed
                            : CONSTANTS.COLORS.primary.primary8}
        >
            {/* isSelected != correctAnswer */}
            <ProfileAvatar
                size={"auto"}
                paddingHorizontal={20}
                paddingVertical={10}
                borderRadius={50}
                backgroundColor={CONSTANTS.COLORS.neutral.neutral3}
            >
                <Text style={[CONSTANTS.TYPOGRAPHY.h3, { color: CONSTANTS.COLORS.primary.primary10 }]}>{letter}</Text>
            </ProfileAvatar>
            <Spacer width={15} />
            <Text style={[
                CONSTANTS.TYPOGRAPHY.h4,
                {
                    color: isSelected || correctAnswer ? CONSTANTS.COLORS.primary.white
                        : CONSTANTS.COLORS.primary.black,
                    flex: 1
                }]}>
                {answer}
            </Text>

            {correctAnswer != null && (<ProfileAvatar
                size={25}
                backgroundColor="white"
            >
                <Ionicons
                    name={correctAnswer ? "checkmark-outline" : "close"}
                    size={15}
                    color={CONSTANTS.COLORS.primary.primary11} />
            </ProfileAvatar>)}
        </CurvedBackground>

        <Spacer height={25} />
    </View>
}
export default GameScreen;