// Récupérer tous les numériques du tableau
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';

let numbers = phrase.split(':').filter( num => parseInt(num) );

// let numbers = phrase.split(':').filter( Number ); Autre solution, en utilisant l'objet Number, qui est une fonction

console.log(numbers);





