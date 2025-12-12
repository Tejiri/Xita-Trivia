import { StyleSheet } from "react-native";




const COLORS = {
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


const TYPOGRAPHY = StyleSheet.create({

    h1: {
        color: COLORS.textColors.white,
        fontSize: 48,
        fontWeight: '800' as const,
        lineHeight: 56,
    },

    // Section headings
    h2: {
        color: COLORS.textColors.white,
        fontSize: 34,
        fontWeight: '700' as const,
        lineHeight: 40,
    },

    // Subhead / card title
    h3: {
        color: COLORS.textColors.white,
        fontSize: 20,
        fontWeight: '700' as const,
        lineHeight: 30,
    },

    // Small headings / labels
    h4: {
        color: COLORS.textColors.white,
        fontSize: 18,
        fontWeight: '600' as const,
        lineHeight: 22,
    },

    // Subtitle / secondary heading
    subtitle: {
        color: COLORS.textColors.gray800,
        fontSize: 16,
        fontWeight: '600' as const,
        lineHeight: 20,
    },
    body: {
        fontSize: 23,
        fontWeight: '400' as const,

        // fontWeight: '500',
        // opacity: 0.5,
        // fontFamily: FontFamily.regular,
        color: COLORS.textColors.white,
    },


    // Small caption / metadata
    caption: {
        color: COLORS.textColors.gray600,
        fontSize: 13,
        fontWeight: '400' as const,
        lineHeight: 16,
    },

});

const CATEGORIES = {
    generalKnowledge: 'General Knowledge',
    sports: 'Sports',
    history: 'History',
    computers: 'Computers',
    science: 'Science',
    film: 'Film',
    animals: 'Animals',
};

const DIFFICULTY = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
};

const CONSTANTS = {
    COLORS,
    EMOJIS,
    TYPOGRAPHY,
    CATEGORIES,
    DIFFICULTY
}



export default CONSTANTS;