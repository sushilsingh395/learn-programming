console.log('Hello Sushil !!!!');


const num1 = 10;
const num2 = 20;
const num3 = 30;

function calculateAverage(n1, n2, n3) {

    const av = (n1 + n2 + n3)/3;

    return av;
}

const result =  calculateAverage(num1, num2, num3);

const result2 =  calculateAverage(num1, num2, 40);

console.log(result2);
