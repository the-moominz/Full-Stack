const fs = require('fs');

fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
    // impossible de lire le fichier
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    // success
    // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
    console.log('File data:', JSON.parse(data)) 
})

// 1- Changez le code ci-dessus et utilisez une promesse pour gérez la récupération des données

// 2- Quel est le dragon le plus agé ? Faite un script pour répondre à cette question.

// 3- Quel est le dragon le plus jeune ? Faite un script pour répondre à cette question.

// 4- Récupérez les dragons et ordonnées les par age décroissant.