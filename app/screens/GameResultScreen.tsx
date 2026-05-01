import CurvedBackground from "@/components/CurvedBackround";
import CustomButton from "@/components/form/CustomButton";
import PageWithHeader from "@/components/pages/PageWithHeader";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import Spacer from "@/components/ui/Spacer";
import CONSTANTS, { FontAwesomeIconName } from "@/constants/CONSTANTS";
import { useStores } from "@/stores/useStores";
import { formatHMS } from "@/utils/formatSeconds";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from 'react-native-svg';



interface Props {
    size?: number;
    strokeWidth?: number;
    progress: number; // 0 - 100
}

export function CircleProgress({
    size = 120,
    strokeWidth = 10,
    progress,
}: Props) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const strokeDashoffset =
        circumference - (circumference * progress) / 100;

    return (
        <View style={{ width: size, height: size }}>
            <Svg width={size} height={size}>
                {/* Background Circle */}
                <Circle
                    stroke="#e6e6e6"
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />

                {/* Progress Circle */}
                <Circle
                    stroke={CONSTANTS.COLORS.primary.primary9}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>

            {/* Center Text */}
            <View style={styles.center}>
                <Text style={styles.text}>{progress}%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        color: CONSTANTS.COLORS.primary.primary9,
        fontSize: 35,
        fontWeight: 'bold',
    },
});


const GameResultScreen = observer(() => {
    const { gameSetupStore } = useStores();

    const percentageScore = (gameSetupStore.score / gameSetupStore.questionCount) * 100;

    return (
        <PageWithHeader
            showBackButton={false}
        >
            <ScrollView>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 20
                        //   height: 200,
                    }}>
                    <CircleProgress
                        strokeWidth={20}
                        progress={percentageScore}
                        size={Dimensions.get('window').width * 0.4} />
                </View>

                <Text
                    style={[CONSTANTS.TYPOGRAPHY.h1, {
                        textAlign: "center"
                    }]}
                >{percentageScore >= 80 ? "Brilliant!" : percentageScore >= 50 ? "Good Effort!" : "Better Luck Next Time!"}
                </Text>
                <Text
                    style={[CONSTANTS.TYPOGRAPHY.h6, {
                        textAlign: "center"
                    }]}
                >{percentageScore >= 80 ? "You've absolutely crushed this round!" : percentageScore >= 50 ? "Nice try, keep going for a higher score" : "More practice needed to improve your score 😢😭"}
                </Text>

                <Spacer height={5} />
                <Text
                    style={[CONSTANTS.TYPOGRAPHY.body, {
                        textAlign: "center"
                    }]} >
                    {`You've answered ${gameSetupStore.score.toString()} out of ${gameSetupStore.questionCount.toString()} questions correctly!`}
                </Text>

                <Spacer height={40} />

                <View style={{ flexDirection: "row" }}>
                    <StatsCard
                        icon="clock-o"
                        title="TIME SPENT"
                        value={`${formatHMS(gameSetupStore.timeSpent)}s`}
                        iconColor={CONSTANTS.COLORS.primary.primary9}
                        titleColor={CONSTANTS.COLORS.neutral.neutral8}
                    // valueColor={CONSTANTS.COLORS.neutral.neutral8}
                    />
                    <Spacer width={20} />

                    <StatsCard
                        icon="fire"
                        title="STREAK"
                        value={`${gameSetupStore.currentStreak.toString()} Hits`}
                        iconColor={CONSTANTS.COLORS.primary.primary9}
                        titleColor={CONSTANTS.COLORS.neutral.neutral8}
                        valueColor={CONSTANTS.COLORS.neutral.neutral8}
                        backgroundColor={CONSTANTS.COLORS.secondary.secondary3}
                    />
                </View>
                <Spacer height={30} />
                <CustomButton
                    shadow
                    buttonText="Play Again"
                    onClick={async () => {
                        await gameSetupStore.storeGetQuestions().then(() => {
                            router.replace("/screens/GameScreen");
                        });
                    }}
                />

                <Spacer height={15} />

                <CustomButton
                    shadow
                    transparent
                    buttonText="Back to Home"
                    onClick={() => {
                        gameSetupStore.resetGame();
                        router.replace("/screens/PlayScreen")
                    }}
                />
            </ScrollView>
            <LoadingOverlay visible={gameSetupStore.isLoading} />
        </PageWithHeader>
    );
});

interface IStatsCard {
    icon: FontAwesomeIconName;
    title: string;
    value: string;
    iconColor: string;
    titleColor: string;
    valueColor?: string;
    backgroundColor?: string;
}

const StatsCard = ({ icon, title, value, iconColor, titleColor, valueColor, backgroundColor }: IStatsCard) => {
    return <CurvedBackground
        shadow
        flex={1} backgroundColor={backgroundColor}>
        <FontAwesome name={icon} size={35} color={iconColor} />
        {/* <Ionicons name={icon} size={35} color={iconColor} /> */}
        <Spacer height={10} />
        <Text style={[CONSTANTS.TYPOGRAPHY.h6, { color: titleColor }]}>
            {title}
        </Text>
        <Text style={[CONSTANTS.TYPOGRAPHY.h1, { color: valueColor }]}>
            {value}
        </Text>
    </CurvedBackground>
}

export default GameResultScreen;