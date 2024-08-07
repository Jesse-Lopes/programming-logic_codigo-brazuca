const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split( '\n');

let values = [];

for (let i = 0; i <= samples.length; i++) {
  values[i] = parseInt(samples.shift());
}

const value1 = values[0];
const value2 = values[1];

const sumValues = (value1, value2) => {
  return value1 + value2;
}

const subtractValues = (value1, value2) => {
  return value1 - value2;
}

const multiplyValues = (value1, value2) => {
  return value1 * value2;
}  

const divideValues = (value1, value2) => {
  return value1 / value2;
}

const sumResult = sumValues(value1, value2);
const subtractionResult = subtractValues(value1, value2);
const multiplicationResult = multiplyValues(value1, value2);
const divisionResult = divideValues(value1, value2);

console.log(`O resultado da soma dos números é: ${sumResult}`);
console.log(`O resultado da subtração dos números é: ${subtractionResult}`);
console.log(`O resultado da multiplicação dos números é: ${multiplicationResult}`);
console.log(`O resultado da divisão dos números é: ${divisionResult}`);
