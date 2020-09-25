const delay = (num,ms) => ( 
    new Promise(
        (resolve, reject) => setTimeout(() => { resolve(num) }, ms)
    )
);
const question20 = async () => {
    const num1 = await delay(1, 5000); 
    console.log(num1);
    const num2 = await delay(2, 2000);
    console.log( num2);
    const num3 = await delay(3, 1000);
    console.log( num3);
}

question20();