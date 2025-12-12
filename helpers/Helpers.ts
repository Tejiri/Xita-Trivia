import { aiModel } from "@/firebaseConfig";


function shuffle(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap elements
        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }

    return array;
}
async function generateHint(question: string): Promise<string> {
    const prompt = "Generate hint for the following question: " + question;
    try {
      const result = await aiModel.generateContent(prompt);
      const response = result.response;
      const text = await response.text(); // await in case it's a promise
      return text;
    } catch (e) {
      console.error("generateHint error", e);
      return "No hint available";
    }
}

export { generateHint, shuffle };

