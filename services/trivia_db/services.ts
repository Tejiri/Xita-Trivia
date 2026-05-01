import CONSTANTS, { GameCategory, GameDifficulty, GameType } from "@/constants/CONSTANTS";
import { QuestionResponseData } from "@/models/QuestionResponse";

import { GoogleGenAI } from "@google/genai";



async function getQuestions(
    gameSetup:
        {
            amount: number,
            category: GameCategory,
            difficulty: GameDifficulty,
            type: GameType
        }
): Promise<QuestionResponseData | null> {
    const categoryValue = CONSTANTS.GAME_CATEGORIES[gameSetup.category];
    const difficultyValue = CONSTANTS.GAME_DIFFICULTY[gameSetup.difficulty];
    const typeValue = CONSTANTS.GAME_TYPE[gameSetup.type];

    // if (category == 0 || difficulty == "") {
    //   return false;
    // }
    // this.loading = true;
    // this.error = null;
    try {
        // https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
        const res = await fetch(`https://opentdb.com/api.php?amount=${gameSetup.amount}&category=${categoryValue}&difficulty=${difficultyValue}&type=${typeValue}`);
        const data = (await res.json()) as QuestionResponseData;
        //   runInAction(() => {
        //     this.response.update(data); // maps to Question instances
        //     this.loading = false;

        //   });
        return data;
    } catch (e) {
        //   runInAction(() => {

        //     this.error = String(e);
        //     this.loading = false;
        //   });

        return null;
    }
}

function shuffleAnswers(correctAnswer: string, incorrectAnswers: string[]): string[] {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    for (let i = allAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    return allAnswers;
}


const generateHint = async (question: string, correctAnswer: string): Promise<string | null> => {
    const genAI = new GoogleGenAI({ apiKey: "AIzaSyDlF69JTSSdbwpkV3OXqhgDfuB-RPSwThk" });
    try {

        const response = await genAI.models.generateContent(
            {
                model: "gemini-3-flash-preview",
                contents: `Generate hint for the question: ${question} with answer: ${correctAnswer}. The hint should be concise and not give away the answer directly.`,
            });

        // const result =  response.text;

        // gameSetupStore.setHintText(response.text!);
        // gameSetupStore.setHintsLeft(gameSetupStore.hintsLeft - 1);
        // console.log(response.text);
        // const result = await model.generateContent(prompt);
        // const response = await result.response;
        // console.log("Generated response:", response);

        // console.log("Generated text:", response.text());

        return response.text!;
    } catch (error) {
        console.error("Gemini API Error:", error);
        return null;
    }
};

export { generateHint, getQuestions, shuffleAnswers };

