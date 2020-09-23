// Outil calcul ttc
function ttc (ht, tva = 0.2) {
    
    return ht + (tva * ht);

  }
console.log(ttc(50));