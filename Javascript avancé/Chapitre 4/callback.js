// En utilisant deux fois la fonction add qui est asynchrone et avec sa fonction de callback additionner 1 et 2
const add = (number, callback, error) => {
    setTimeout(() => {
        // Si ce n'est pas un nombre, on renvoie une erreur
        if (isNaN(parseInt(number))) {
            error('Not a number');

            return;
        }
        // Fonction de callback s'il n'y a pas d'erreur
        callback(number);
    }, 1000);
}

// Premier appel de la fonction add()
add( 1, number => {
    let sum = number;

    add( 2, number => {
        sum += number;

        console.log(`Somme : ${sum}`);
    }, 
    error => console.log(error));
}, 
error => console.log(error));


