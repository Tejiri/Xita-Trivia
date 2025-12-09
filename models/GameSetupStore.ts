import CONSTANTS from "@/constants/Constants";
import { makeAutoObservable } from "mobx";


class GameSetup {
    categoryNumber?: number = 0;
    category?: string = "";
    difficulty?: string = "";
    constructor() {
        makeAutoObservable(this);
    }


    updateSetup(category?: string, difficulty?: string) {
        this.category = category;
        this.difficulty = difficulty?.toLowerCase();

        switch (category) {
            case CONSTANTS.CATEGORIES.generalKnowledge:
                this.categoryNumber = 9;
                break;
            case CONSTANTS.CATEGORIES.sports:
                this.categoryNumber = 21;
                break;
            case CONSTANTS.CATEGORIES.history:
                this.categoryNumber = 23;
                break;
            case CONSTANTS.CATEGORIES.computers:
                this.categoryNumber = 18;
                break;
            case CONSTANTS.CATEGORIES.animals:
                this.categoryNumber = 27;
                break;
            case CONSTANTS.CATEGORIES.film:
                this.categoryNumber = 11;
                break;
            default:
                this.categoryNumber = 0;
        }
       console.log(`Game setup updated: Category - ${this.category} (${this.categoryNumber}), Difficulty - ${this.difficulty}`);
       
    }


    resetSetup() {
        this.categoryNumber = 0;
        this.category = "";
        this.difficulty = "";
    }

}

export const gameSetupStore = new GameSetup();