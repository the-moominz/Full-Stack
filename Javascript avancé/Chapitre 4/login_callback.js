const login = (email, password, callback ) => {
    setTimeout(() => {
        // Fonction de callback
        callback( {email} );
    }, 1000);
}

login( 'alan@alan.fr', 123456789, email => { 
    console.log(email) 
});





function foo(num, baz ){

    console.log(baz(num)) ;
}

// foo( 7, num => num * 3 );

function calcul(x, y, callback){

    return callback(x, y);
}

console.log(
    calcul(2, 3, (x, y) => x + y )
    );