// Scope Calcul

let a = 1 ;

function calcul(){

    let a = 2 + a ;

    console.log( a  , "calcul" );

    function sub_calcul(){
        let b = a + 1;

        console.log(b  , "sub_calcul");
    }

    sub_calcul();
}

calcul();
// Génère une erreur, parce qu'on redéfinit "a" dans la fonction
// Pour corriger le problème, on retire le "let" avant le "a" dans la fonction calcul()


// TDZ

function tdz(){
    console.log(tdz);

    // Le console.log tente d'appeler une variable qui n'a été définie qu'après
    // Le scope remonte et cherche ce qu'il y a AVANT
    let tdz = "Temporal Dead Zone" ;
}

tdz();

// for let 
let i = 10;

for (let i = 0; i < 10; i++) {
    
    console.log(i);
}
// On définit 2 fois la variable i, mais c'est le troisième paramètre du for qui est itéré
for (let j = 0; j < 10; j++) {}
console.log(j);
// On va avoir une erreur, car rien n'est définit dans le scope de la boucle et j est défini dans le scope (on ne peut
// pas l'appeler en dehors)

// const
for (const j = 0; j < 10; j++) {} // la constante va être ré-assignée à chaque tour de boucle, donc impossible
