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

Promise.all([ readJSON('./data/dragons.json') , readJSON('./data/relationships.json') ])
    .then( data => {

        const { dragons } = data[0];
        const { relationship } = data[1];

        let relations = relationship.map(r => r.relation);

        console.log(relations);
        //console.log(dragons);
        //console.log(relationship);


    })