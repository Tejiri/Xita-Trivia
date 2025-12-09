// ...existing code...
import { makeAutoObservable } from "mobx";

export type QuestionData = {
  type?: string;
  difficulty?: string;
  category?: string;
  question?: string;
  correct_answer?: string;
  incorrect_answers?: string[];
};

export default class Question {
    type: string = "";
    difficulty: string = "";
    category: string = "";
    question: string = "";
    correct_answer: string = "";
    incorrect_answers: string[] = [];

    constructor(data?: QuestionData) {
        makeAutoObservable(this);
        if (data) this.updateQuestion(data);
    }

    updateQuestion(json: Partial<QuestionData>) {
        if (!json) return;
        if (typeof json.type === "string") this.type = json.type;
        if (typeof json.difficulty === "string") this.difficulty = json.difficulty;
        if (typeof json.category === "string") this.category = json.category;
        if (typeof json.question === "string") this.question = json.question;
        if (typeof json.correct_answer === "string") this.correct_answer = json.correct_answer;
        if (Array.isArray(json.incorrect_answers)) this.incorrect_answers = json.incorrect_answers;
    }

    static fromJSON(data: QuestionData) {
      return new Question(data);
    }
}
// ...existing code...