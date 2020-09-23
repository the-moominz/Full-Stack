// Comptez chacune des lettres dans "Mississipi". Affichez le résultat dans une structure de données facile à lire.
const phrase = "Mississipi";
let statistic = {};

// On utilise l'objet Map 
const letters = new Set(phrase); 

// 1ère solution
for (let letter of letters) {
    
    let count = 0;
    for (const p of phrase) {
        if (letter == p) count ++;
    }

    statistic[letter] = count;
}


// 2ème solution 
statistic = {};

for(const letter of letters){
    // préparer la chaîne de caractères dynamique dans match
    // le paramètre g facultatif permet de chercher sur toute la chaîne de caractères
    const re = new RegExp(letter, 'g'); 
    statistic[letter] = phrase.match(re).length; // On doit essayer de mettre letter (variable) à la place de i 
}


// 3ème solution
statistic = {};

[ ...letters ].map( letter => {
    const re = new RegExp(letter, 'g'); 
    statistic = { ...statistic, [letter] : phrase.match(re).length}
});

console.log(statistic);

// Généralisez et créez maintenant une fonction qui retourne une structure simple à utiliser pour connaître toutes les occurences de chacune des lettres.