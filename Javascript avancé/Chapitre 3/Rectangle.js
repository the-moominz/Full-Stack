// Classe mère 
class Rectangle {

    constructor(w, h) {

        this._w = w;
        this._h = h;
    }

    // Setters

    set width(w) {

        this._w = w;
    }

    set height(h) {

        this._h = h;
    }

    // Getters 

    get width() {

        return this._w;
    }

    get height() {

        return this._h;
    }

    // Méthodes
    area() {
        // Méthode qui permet de calculer l'aire du rectangle 
        return this._w * this._h;
    }

    perimeter() {
        // Méthode qui permet de renvoyer la dimension du rectangle
        return (this._w + this._h) * 2;
    }
}


// Classe fille 
class Square extends Rectangle {

    constructor(w) {

        super(w, w);
    }

}

const rect = new Rectangle(10, 20);
const square = new Square(5);

console.log(rect, square);
console.log(rect.perimeter());
console.log(square.area());
