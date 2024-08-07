const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

let value = parseInt(sample.shift());

const countNumbersAndPrintEven = (value) => {
  for (let i = 1; i <= value; i++) {

    if (i % 2 === 0) {
      console.log(i + ' é um número par!');
    }
  }
}

countNumbersAndPrintEven(value);
