/* Soit une fonction message asynchrone qui retournera une chaîne de caractères. 
Appellez deux fois cette fonction pour concatener le message suivant : "Hello" + "World!". */

const phrase = (string, callback) => {
    setTimeout(() => {
        // Fonction de callback
        callback(string);
    }, 1000);
}

// Premier appel de la fonction phrase 
phrase( "Hello", string => {
    let message = string;

    // Deuxième appel de la fonction phrase 
    phrase( " World", string => {
        message += string;

        console.log(message);
    });
});