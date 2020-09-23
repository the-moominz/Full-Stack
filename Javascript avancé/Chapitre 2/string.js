// Faite un script qui prend en argument message (texte) et qui retourne un tableau des valeurs du nombre de caractères de chaque mot.
// Indication : utilisez la méthode split pour transformer la chaîne en tableau.

const message = "Bonjour tout le monde, vive JS, !";

const array = message
                    .replace(/,/g, '')
                    .split(' ')
                    .filter(w => ['.', '!', '...'].includes(w) === false)
                    .map( w => w.length);

console.log(array);
