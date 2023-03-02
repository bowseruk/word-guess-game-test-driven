import Letter from './Letter.js';

class Word {
    constructor(word) {
        this.letters = word.split("").map(letter => new Letter(letter));
    }
    guessLetter(letter) {
        return this.letters.map(char => char.guess(letter)).includes(true);
    }
    guessedCorrectly() {
        return ! (this.letters.map(char => char.visible).includes(false));
    }
}

export { Word as default};
