const add = number => ( new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isNaN(parseInt(number))) {
            reject(new Error('Not a number'));
            return;
        }
        resolve(number);
    }, 300);
    })
);

add(9)
.then( num => add(5 + num))
.then( sum => console.log(sum))
.catch( err => console.error(err))