class Letter {
    constructor(letter) {
        this.visible = (! letter.match(/^[0-9a-zA-Z]+$/));
        this.char = letter      
    }
    guess(letter) {
        this.visible = (this.visible || (this.char === letter));
        return (this.char === letter);
    }
    toString() {
        return (this.visible) ? this.char : '_';
    }
    getSolution() {
        return this.char;
    }
}

export { Letter as default};
