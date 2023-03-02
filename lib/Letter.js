class Letter {
    constructor(letter) {
        if (letter.match(/^[0-9a-zA-Z]+$/)) {
            this.visible = false
        } else {
            this.visible = true;
        }
        this.letter = letter      
    }
    guess(letter) {
        this.visible = (this.visible || (this.letter === letter));
        return (this.letter === letter);
    }
    toString() {
        return (this.visible) ? this.letter : '_';
    }
    getSolution() {
        return this.letter;
    }
}

export { Letter as default};
