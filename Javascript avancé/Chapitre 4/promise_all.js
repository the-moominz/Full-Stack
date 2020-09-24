const p = number => ( new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(parseInt(number))) {
          reject( new Error( 'not a number ...' ) );
  
          return;
      }
      resolve(number);
    }
    , 100);
  }) ) ;
  
  Promise.all([p(1), p(2), p(3)]).then(numbers => { 
    // Met dans un tableau les 3 valeurs
      console.log(numbers);
    // Va additionner les valeurs du tableau
      console.log( numbers.reduce((acc, curr) => acc + curr) );
  }).catch( err => console.error(err));