import { GameCategory, GameDifficulty, GameType } from "@/constants/CONSTANTS";
import { QuestionData } from "@/models/Question";
import { QuestionResponseData } from "@/models/QuestionResponse";
import { generateHint, getQuestions, shuffleAnswers } from "@/services/trivia_db/services";
import { makeAutoObservable, runInAction } from "mobx";


export class GameSetupStore {
    hintsLeft: number = 0;
    hintText: string = "";
    selectedCategory: GameCategory = "General Knowledge";
    questionCount: number = 10;
    difficulty: GameDifficulty = "Medium";
    gameType: GameType = "multipleChoice";

    questions: QuestionData[] | null = null;
    shuffledAnswers: string[] = [];
    apiResponse: QuestionResponseData | null = null;


    error: string | null = null;
    isLoading: boolean = false;

    timeSpent: number = 0;
    currentQuestionIndex: number = 0;
    score: number = 0;
    streak: number = 0;
    currentStreak: number = 0;
    selectedAnswer: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async storeGenerateHint(question: string, correctAnswer: string) {
        this.isLoading = true;
        this.error = null;
        const hint = await generateHint(question, correctAnswer);
        if (hint) {
          runInAction(() => {
            this.setHintText(hint);
            this.setHintsLeft(this.hintsLeft - 1);
            this.isLoading = false;
          });
        }else{
          runInAction(() => {
            this.setError("Failed to generate hint");
            this.isLoading = false;
          });
        }
    }

    async storeGetQuestions() {
        if (this.questionCount === 5) this.hintsLeft = 1;
        if (this.questionCount === 10) this.hintsLeft = 2;
        if (this.questionCount === 15) this.hintsLeft = 3;
        if (this.questionCount === 20) this.hintsLeft = 4;
        this.hintText = "";

        this.timeSpent = 0;
        this.score = 0;
        this.streak = 0;
        this.currentStreak = 0;
        this.selectedAnswer = null;
        this.currentQuestionIndex = 0;
        this.isLoading = true;
        const questions = await getQuestions(
            {
                amount: this.questionCount,
                category: this.selectedCategory,
                difficulty: this.difficulty,
                type: this.gameType
            }
        );

        if (questions?.response_code === 0 && questions) {
            runInAction(() => {
                this.apiResponse = questions;
                this.questions = questions.results;
                this.isLoading = false;
            });
        } else {
            runInAction(() => {
                this.error = "Failed to fetch questions";
                this.isLoading = false;
            });
        }
    }

    resetGame() {
        this.selectedCategory = "General Knowledge";
        this.questionCount = 10;
        this.difficulty = "Medium";
        this.gameType = "multipleChoice";

        this.questions = null;
        this.shuffledAnswers = [];
        this.apiResponse = null;

        this.error = null;
        this.isLoading = false;

        this.timeSpent = 0;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.currentStreak = 0;
        this.selectedAnswer = null;
        this.hintsLeft = 0;
        this.hintText = "";
    }

    storeShuffleQuestions() {
        if (!this.questions) return;

        this.shuffledAnswers = shuffleAnswers(this.questions[this.currentQuestionIndex].correct_answer!, this.questions[this.currentQuestionIndex].incorrect_answers!);
    }

    setHintText(text: string) {
        this.hintText = text;
    }

    setHintsLeft(hints: number) {
        this.hintsLeft = hints;
    }

    incrementTimeSpent() {
        this.timeSpent++;
    }

    incrementCurrentStreak() {
        this.currentStreak++;
    }

    setCurrentStreak(streak: number) {
        this.currentStreak = streak;
    }

    incrementScore() {
        this.score++;
    }
    incrementStreak() {
        this.streak++;
    }

    setScore(score: number) {
        this.score = score;
    }

    setStreak(streak: number) {
        this.streak = streak;
    }

    setSelectedAnswer(selectedAnswer: string) {
        if (this.selectedAnswer) {
            // If an answer is already selected, do not change it
            return;
        }
        this.selectedAnswer = selectedAnswer;

        if (this.selectedAnswer === this.questions![this.currentQuestionIndex].correct_answer) {
            this.score++;
            this.streak++;

            if (this.currentStreak > this.streak) {
            }
            else {
                this.setCurrentStreak(this.streak);
            }
        }
        else {
            this.setStreak(0);
        }

        console.log({
            selectedAnswer: this.selectedAnswer,
            correctAnswer: this.questions![this.currentQuestionIndex].correct_answer,
            currentStreak: this.streak,
            maxStreak: this.currentStreak,
            score: this.score
        });

    }

    setError(error: string | null) {
        this.error = error;
    }

    setIsLoading(loading: boolean) {
        this.isLoading = loading;
    }

    setCurrentQuestionIndex(index: number) {
        this.currentQuestionIndex = index;
    }

    setQuestions(questions: QuestionData[] | null) {
        this.questions = questions;
    }

    setShuffledAnswers(answers: string[]) {
        this.shuffledAnswers = answers;
    }

    setApiResponse(response: QuestionResponseData | null) {
        this.apiResponse = response;
    }

    setCategory(category: GameCategory) {
        this.selectedCategory = category;
    }

    setQuestionCount(count: number) {
        this.questionCount = count;
    }

    setDifficulty(difficulty: GameDifficulty) {
        this.difficulty = difficulty;
    }

    setGameType(type: GameType) {
        this.gameType = type;
    }

    setNextQuestion() {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
        this.storeShuffleQuestions();
    }

    values() {
        console.log(
            JSON.stringify({
                selectedCategory: this.selectedCategory,
                questionCount: this.questionCount,
                difficulty: this.difficulty,
                gameType: this.gameType,
                currentQuestionIndex: this.currentQuestionIndex,
                score: this.score,
                selectedAnswer: this.selectedAnswer,

            })
        );

    }
}