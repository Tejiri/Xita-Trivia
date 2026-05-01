import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform, StyleSheet } from "react-native";




const COLORS = {
    primary: {
        primary: "#8A2BE2",
        white: "#FFFFFF",
        primary2: "#F9ECFF",
        primary3: "#EFDBFF",
        primary4: "#DCB8FF",
        primary5: "#C894FF",
        primary6: "#B56EFF",
        primary7: "#9F46F7",
        primary8: "#8422DC",
        primary9: "#6700B5",
        primary10: "#480081",
        primary11: "#2C0051",
        black: "#000000"
    },

    secondary: {
        secondary: "#F0E68C",
        secondary1: "#FFFFFF",
        secondary2: "#FEF398",
        secondary3: "#EFE58B",
        secondary4: "#D2C972",
        secondary5: "#B6AD5A",
        secondary6: "#9B9342",
        secondary7: "#80792B",
        secondary8: "#676014",
        secondary9: "#4E4800",
        secondary10: "#363100",
        secondary11: "#1F1C00",
        secondary12: "#000000"
    },

    tertiary: {
        tertiary: "#C35163",
        tertiary1: "#FFFFFF",
        tertiary2: "#FFECED",
        tertiary3: "#FFD9DC",
        tertiary4: "#FFB2BA",
        tertiary5: "#FF8797",
        tertiary6: "#E36A7C",
        tertiary7: "#C35163",
        tertiary8: "#A3394C",
        tertiary9: "#842135",
        tertiary10: "#650620",
        tertiary11: "#400010",
        tertiary12: "#000000"
    },

    neutral: {
        neutral: "#FAF9F6",
        neutral1: "#FFFFFF",
        neutral2: "#F1F1EE",
        neutral3: "#E3E2E0",
        neutral4: "#C7C6C4",
        neutral5: "#ABABA9",
        neutral6: "#91918E",
        neutral7: "#777775",
        neutral8: "#5E5F5D",
        neutral9: "#464745",
        neutral10: "#1A1C1A",
        neutral11: "#1A1C1A",
        neutral12: "#000000"
    },


    gradientBackground: {
        purple: "#9333ea",
        blue: "#2563eb",
        indigo: "#4338ca"
    },

    answerStates: {
        bgGreen: "#22c55e",
        bgRed: "#ef4444",
        bgGray50: "#f9fafb",
        bgGray200: "#e5e7eb"
    },

    textColors: {
        white: "#ffffff",
        gray800: "#1f2937",
        gray700: "#374151",
        gray600: "#4b5563",
        purple600: "#9333ea",
    },

    // Button Hover: #fde047 (Lighter Yellow)
    // Button Text: #1f2937 (Dark Gray)
    // Card Text/Icons: #ffffff (White)
    // Counter Badge: rgba(255, 255, 255, 0.2) (Semi-transparent)
    // Disabled State: rgba(255, 255, 255, 0.2) (Grayed out)
    backgrounds: {
        hintCard: "#facc15", // Yellow
        hintGradientStart: "#facc15", // Yellow
        hintGradientEnd: "#fb923c",   // Orange
        bgWhite10: "rgba(255,255,255,0.1)", // White at 10% opacity (glass effect)
        bgWhite20: "rgba(255,255,255,0.2)", // White at 20% opacity (inactive states)
        bgWhite30: "rgba(255,255,255,0.3)", // White at 30% opacity (hover states)
        bgWhite50: "rgba(255,255,255,0.5)"  // White at 50% opacity (disabled answers)

    },
}

const FontFamily = {
    regular: Platform.OS === 'ios' ? 'System' : 'Roboto-Regular',
    medium: Platform.OS === 'ios' ? 'System' : 'Roboto-Medium',
    bold: Platform.OS === 'ios' ? 'System' : 'Roboto-Bold',
    light: Platform.OS === 'ios' ? 'System' : 'Roboto-Light',
};

const TYPOGRAPHY = StyleSheet.create({
    h1: {
        color: COLORS.primary.black,
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: FontFamily.bold,

        // lineHeight: 40,
        // letterSpacing: -0.5,
    },
    h2: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: FontFamily.bold,
        color: COLORS.primary.black,
        lineHeight: 36,
        letterSpacing: -0.3,
    },
    h3: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: FontFamily.medium,
        color: COLORS.primary.black,
        lineHeight: 32,
        letterSpacing: -0.2,
    },
    h4: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: FontFamily.medium,
        color: COLORS.primary.black,
        lineHeight: 28,
    },
    h5: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: FontFamily.medium,
        color: COLORS.primary.black,
        lineHeight: 26,
    },
    h6: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: FontFamily.medium,
        color: COLORS.primary.black,
        lineHeight: 24,
    },

    body: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: FontFamily.regular,
        color: COLORS.primary.black,
        lineHeight: 22,
    },

    bodyNormal: {
        fontSize: 15,
        fontFamily: FontFamily.regular,
        lineHeight: 22,
    },

    bodyWithOpacity: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: FontFamily.regular,
        color: COLORS.primary.black,
        lineHeight: 22,
        opacity: 0.8
    }
});


const EMOJIS = {
    appIcon: '🎯',

    results: {
        excellent: '🏆',  // 80%+ score
        good: '🎉',       // 60-79% score
        tryAgain: '💪',   // Below 60%
    },

    // Stats & Achievements
    stats: {
        star: '⭐',
        fire: '🔥',       // Streak indicator
        trophy: '🏆',
        medal: '🏅',
        crown: '👑',
    },

    // UI Elements
    ui: {
        checkMark: '✅',
        crossMark: '❌',
        thinking: '🤔',
        celebration: '🎊',
        rocket: '🚀',
        target: '🎯',
        hint: '💡',
    },
    categories: {
        generalKnowledge: '🧠',
        sports: '⚽',
        history: '📜',
        computers: '💻',
        science: '🔬',
        film: '🎬',
        geography: '🌍',
        animals: '🦁',
        music: '🎵',
        art: '🎨',
        food: '🍕',
        books: '📚',
        nature: '🌿',
        space: '🚀',
        mythology: '⚡',
        celebrities: '⭐',
    }
}


const GAME_CATEGORIES = {
    "General Knowledge": 9,
    "Sports": 21,
    "Mythology": 20,
    "History": 23,
    "Computers": 18,
    "Art": 25,
    "Science": 17,
    "Geography": 22,
    "Animals": 27,
};

const GAME_DIFFICULTY = {
    "Easy": 'easy',
    "Medium": 'medium',
    "Hard": 'hard',
};

const GAME_TYPE = {
    multipleChoice: "multiple",
    trueFalse: "boolean",
}



const CONSTANTS = {
    COLORS,
    EMOJIS,
    TYPOGRAPHY,
    GAME_CATEGORIES,
    GAME_DIFFICULTY,
    GAME_TYPE
}

export type GameCategory = keyof typeof GAME_CATEGORIES;
export type GameDifficulty = keyof typeof GAME_DIFFICULTY;
export type GameType = keyof typeof GAME_TYPE;
export type IonIconName = keyof typeof Ionicons.glyphMap;
export type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;

export default CONSTANTS;