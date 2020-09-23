const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s4",
            {
                "name": "Naoudi",
                "mention": "",
                "notes": [14.5, 19, 18],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/3"
            }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
        [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
];

const MapDataStudents = new Map(DataStudents);

const mentions = [
    { mention: "TB", notes: [17, 20] },
    { mention: "B", notes: [14, 16.99] },
    { mention: "AB", notes: [12, 13.99] },
    { mention: "P", notes: [10, 11.99] },
];

const updateDataStudents = () => {
    // vous pouvez donner les noms que vous voulez dans les crochet clé/valeur
    for (const [k, student] of MapDataStudents) {
        const { notes } = student;

        // si pas de note on passe à l'itération suivante 
        if (notes.length === 0) continue;

        const sum = notes.reduce((curr, acc) => curr + acc);
        const average = Math.floor((sum / notes.length) * 100) / 100;

        // valeur par défaut 
        student.mention = "Aucune mention";
        student.average = average;

        for (const { mention, notes } of mentions) {
            const [min, max] = notes;

            // astuce pour savoir si average est dans l'interval min max
            if ((average - min) * (max - average) > 0) {
                student.mention = mention;

                break;
            }
        }
    }
}

// Ajoutez un student
const s7 = {
    "name": "Kaa",
    "mention": "",
    "notes": [12, 15, 17],
    "average": null,
    "url": "http://lorempixel.com/100/100/cats/4"
}

// source de vérité
const stateStudent = {
    "name": "",
    "mention": "",
    "notes": [],
    "average": null,
    "url": ""
}

// On vérifie qu'il n'y a pas de clé déjà présente et que la source de vérité est bien respecté
if (
    MapDataStudents.has('s7') === false
    && Object.keys(stateStudent).sort().toString() === Object.keys(s7).sort().toString()) {
    MapDataStudents.set('s7', s7);
}

updateDataStudents();

console.log(MapDataStudents);