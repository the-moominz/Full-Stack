let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

function accumulator(numbers, acc = 0 ){

    // Une condition d'arrêt et retourner la somme des valeurs du tableau
    if (numbers.length == 0) return acc;
    // Dès que le tableau est vide, on retourne la somme des valeurs du tableau

    // On définit une constante pour stocker, à chaque appel de la fonction, l'index 0 du tableau
    const number = numbers.shift();
    // On fait appel à l'accumulateur, qui par défaut est à 0 et on additionne avec le number
    // 1 + 0, 1 + 2, 3 + 3, 6 + 4 etc
    acc = acc + number;
    // dans la fonction on ré-appelle la fonction elle-même
    return accumulator (numbers, acc);

}

let total = accumulator(numbers);
console.log(total); // doit retourner 55