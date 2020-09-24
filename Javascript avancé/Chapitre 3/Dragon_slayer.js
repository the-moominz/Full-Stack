// Création de la class qui permettra de lancer la partie
class Game {

    // Attributs
    player1;
    player2;

    constructor(player1, player2, game) {   
        // Instanciation des deux objets de Player (Knight, Dragon)
        this.player1 = new Knight(100, 70, "Lair");
        this.player2 = new Dragon(75, 85, "Dragon");
        this._game = 1;
    }

    // Méthode
    run() {
        // Méthode qui va permettre de faire une boucle et lancer le jeu 
        // TANT QUE player 1.life || player 2.life > 0 
        while(this.player1.life > 0 && this.player2.life > 0) {

            /* 1 - On doit déterminer qui commence de manière aléatoire (Math.random)
            Si c'est entre 0 et 0.49 c'est le dragon, sinon entre 0.50 et 1 c'est le chevalier */

            /* 2 - On fait appel à la méthode hit(target), la target correspond au perdant du 1- */

            /* 3 - La boucle prend fin quand un desjoueurs arrive à 0 ou moins */


            console.log(`Tour n°: ${this._game++}`); 
            

            if (Math.random() < .5) {

                console.log(this.player2.hit(this.player1));

            } else {

                console.log(this.player1.hit(this.player2));

            }

        } 

        /* 4 - On affiche les résultats de la partie 
        Si l'un des joueurs a encore des PV, il gagne. On affiche ses PV restants et le nombre de coups. */
        if (this.player1.life > 0) {

            console.log(`${this.player1.name} a gagné. Il lui reste ${this.player1.life} de points de vie. Il a infligé ${this.player1.shot} coup(s). ${this.player2.name} perd et n'a infligé que ${this.player2.shot} coup(s).`);

        } else {

            console.log(`${this.player2.name} a gagné. Il lui reste ${this.player2.life} de points de vie. Il a infligé ${this.player2.shot} coup(s). ${this.player1.name} perd et n'a infligé que ${this.player1.shot} coup(s).`);
        }

    }

}

// Création d'une class Player, dont héritera tous les futurs joueurs 
class Player {

    constructor(force, life, name) {

        this._force = force;
        this._life = life;
        this._shot = 0;
        this._name = name;
    }

    // Setters 
    set force(force) {
        this._force = force; 
    }

    set life(life) {
        this._life = life; 
    }

    set shot(shot) {
        this._shot = shot;
    }
    set name(name) {
        this._name = name;
    }

    // Getters 
    get force() {

        return this._force;
    }

    get life() {

        return this._life;
    }

    get shot() {

        return this._shot;
    }

    get name() {

        return this._name;
    }

    // Méthodes
    hit(target) {
        // Méthode qui sert à attaquer et qui prend en paramètre la cible à attaquer 
        let degats = this._force * 0.2;
        target.life -= degats;

        // On met à jour le nombre de coups
        this._shot++;

        return `${this._name} a infligé ${degats} de dégâts à ${target.name}.`; 
    }
 
}

// Création de la class Knight, qui hérite de Player 
class Knight extends Player {


}

// Création de la class Dragon, qui hérite de Player 
class Dragon extends Player {


}


// On lance le début de la partie en faisant appel à la méthode run() de la class Game 
const game = new Game();
game.run();

