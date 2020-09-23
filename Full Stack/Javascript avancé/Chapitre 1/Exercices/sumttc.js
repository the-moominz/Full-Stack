// Ecrivez une fonction sumTTC qui prend 3 nombres arbitraires de prix HT et retourne la somme de ces prix TTC, la tva sera un paramètre facultatif de la fonction. Les prix HT seront donnés dans un tableau :

const pricesHT = [100, 200, 55];

function sumTTC(x, y, z, tva = 0.2) {

    return (x + y + z) * (1 + tva);

} 

console.log(sumTTC(...pricesHT));