class Parser {

    constructor(parser, string) {

        this._parser = parser;
        this._string = string;
    }

    set parser(parser) {

        this._parser = parser;
    }

    get str() {

        return this._string.join(' ');

    }

    parse(str) {

        this._string = str.split(this._parser).filter(Number).map(n => n.trim());

    }
}

const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';

const p = new Parser(':');
p.parse(phrase);
console.log(p.str); 