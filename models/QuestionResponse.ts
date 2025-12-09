// ...existing code...
import { makeAutoObservable } from "mobx";
import Question, { QuestionData } from "./Question";

export type QuestionResponseData = {
  response_code: number;
  results: QuestionData[];
};

export default class QuestionResponse {
  response_code: number = 0;
  results: Question[] = [];

  constructor(data?: QuestionResponseData) {
      makeAutoObservable(this);
      if (data) this.update(data);
  }

  update(data: QuestionResponseData) {
    this.response_code = typeof data.response_code === "number" ? data.response_code : 0;
    this.results = Array.isArray(data.results)
      ? data.results.map(r => new Question(r))
      : [];
  }
}
// ...existing code...