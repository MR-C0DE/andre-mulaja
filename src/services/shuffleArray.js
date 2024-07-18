 export const shuffleArray = (array) =>  {
    // Copy array to avoid mutating the original
    let shuffledArray = array.slice();
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    // Return only the first 6 shuffled values
    return shuffledArray.slice(0, 6);
}