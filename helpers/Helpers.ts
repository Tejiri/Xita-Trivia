

function shuffle(array : any[]) : any[] {
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


export { shuffle };
