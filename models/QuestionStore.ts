import QuestionResponse, { QuestionResponseData } from "@/models/QuestionResponse";
import { makeAutoObservable, runInAction } from "mobx";

class QuestionStore {
  response = new QuestionResponse();
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  resetStore(){
    this.response = new QuestionResponse();
    this.loading = false;
    this.error = null;
  }

  async fetchQuestions(amount = 10, category: number, difficulty: string) {
    console.log(category +"dsnisfiodhiofhihfiohjfdiojhfdiofdiofdhoi ");
    if (category == 0 || difficulty == "") {
      return false;
    }
    this.loading = true;
    this.error = null;
    try {
      // https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
      const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`);
      const data = (await res.json()) as QuestionResponseData;
      runInAction(() => {
        this.response.update(data); // maps to Question instances
        this.loading = false;

        // console.log("Questions fetched:", this.response.results[0].category );
        
      });
      return true;
    } catch (e) {
      runInAction(() => {
        console.log("Error fetching questions:", e  );
        
        this.error = String(e);
        this.loading = false;
      });

      return false;
    }
  }
}

export const questionStore = new QuestionStore();