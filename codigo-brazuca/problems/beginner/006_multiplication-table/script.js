const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const number = parseInt(sample.shift());

const multiplyNumbers = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = ' + number * i);
  }
}

multiplyNumbers(number);
