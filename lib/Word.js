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
    toString() {
        return this.letters.map(char => char.toString()).join('');
    }
    getSolution() {
        return this.letters.map(char => char.getSolution()).join('');
    }
}

export { Word as default};
