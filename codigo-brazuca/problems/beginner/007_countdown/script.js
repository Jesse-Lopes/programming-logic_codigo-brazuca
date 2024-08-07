const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const number = parseInt(sample.shift());

const doCountdown = (number) => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

doCountdown(number);
