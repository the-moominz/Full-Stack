// Apprentissage de la fonction récursive

function foo(count = 10){

    if( count == 0 ) return "Stop" ; 

    count = count - 1 ;
    console.log(count);

    // count--;
    return foo(count);
    // Si on ne passe pas de paramètre par défaut à la fonction récursive, on fait un stack overflow (pas bon)
    // Il faut retourner la fonction si on veut que le "Stop" s'affiche

} 

console.log(foo());