// Utilisez la fonction map pour calculer le prix TTC des téléphones suivants en utilisant une fonction fléchée :
const phones  = [
    { name:'iphone XX', priceHT:900 },
    { name:'iphone X', priceHT:700 },
    { name:'iphone B', priceHT:200 }
  ];

let ttc = phones.map(phone => phone.priceHT * (1 + 0.2));
console.log(ttc);

