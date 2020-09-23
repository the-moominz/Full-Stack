const CounterV2 = {
    count: 0,
    counter: function counter() {
        console.log(this.count, "Au niveau du context de l'objet CounterV2");

        // La fonction fléchée récupère le contexte dans lequel elle a été définie donc elle
        // peut récupérer le contexte this.count et accéder à cette variable
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};


// ES5 ça ne mache pas ... 
const CounterV1 = {
    count: 0,
    counter: function counter() {
        // Au niveau du context CounterV1
        setInterval(function () {
            // ici la fonction function perd le context du ConterV1
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};
