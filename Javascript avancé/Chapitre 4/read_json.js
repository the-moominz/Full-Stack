/*fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
    // impossible de lire le fichier
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    // success
    // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
    console.log('File data:', JSON.parse(data)) 
})*/

const fs = require('fs');

// 1- Changez le code ci-dessus et utilisez une promesse pour gérez la récupération des données
const file = filename => ( new Promise((resolve, reject) => {
        fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
            // impossible de lire le fichier
            if (err) {
                reject(new Error("File read failed:"));

                return;
            }
            resolve(JSON.parse(data));
        })
    })
);

file('./data/dragons.json')
.then(fs => console.log(fs))
.catch(err => console.error(err));

// 2- Quel est le dragon le plus agé ? Faite un script pour répondre à cette question.

// 3- Quel est le dragon le plus jeune ? Faite un script pour répondre à cette question.

// 4- Récupérez les dragons et ordonnées les par age décroissant.