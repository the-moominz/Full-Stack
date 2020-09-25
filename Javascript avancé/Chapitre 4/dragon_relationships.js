const fs = require('fs');

const readJSON = fileName => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(fileName, { encoding: 'utf8' },
                (err, data) => {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(JSON.parse(data));
                    }
                });
        }
    );
}

Promise.all([readJSON('./data/dragons.json'), readJSON('./data/relationships.json')])
    .then(data => {

        const { dragons } = data[0];
        const { relationships } = data[1];

        //console.log(dragons);
        //console.log(relationships);

        let dragonRelations = [];
        for (relationship of relationships) {

            const dragon = dragons.filter(dragon => dragon.id === relationship.id); //filter renvoie un tableau
            const { name } = dragon[0];

            const relations = [];
            const { relation } = relationship;
            //console.log(relation);
            for (const id of relation) {

                const { name: dragonName } = dragons.filter(dragon => dragon.id === id)[0];
                relations.push(dragonName);

            }
            dragonRelations.push({ name, relations });
            //console.log(relationship);
        }
        console.log(dragonRelations);
    })