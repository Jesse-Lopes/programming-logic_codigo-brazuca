const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const number = parseInt(sample.shift());
let factorial = 1;

const calculateFactorial = (number, factorial) => {
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }

  console.log(`O fatorial de ${number} é: ${factorial}`);
}

calculateFactorial(number, factorial);
