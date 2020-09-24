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
.then( data => {
    //console.log(data);
    const { dragons } = data;

    // Liste des dragons par ordre de leur âge DESC
    dragons.sort((a, b) => b.age - a.age);
    console.log(dragons);

    const youngest = dragons[dragons.length - 1];
    const oldest = dragons[0];

    // Affichage des noms & âges du plus vieux et du plus jeune des dragons
    return `The oldest is ${oldest.age} y.o and his name is ${oldest.name}. The youngest is ${youngest.age} y.o and his name is ${youngest.name}.`;
    
})
.then(data => console.log(data))
.catch(err => console.error(err));

