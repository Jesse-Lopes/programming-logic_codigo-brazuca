const input = require( 'fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const value = parseInt(sample.shift());

const checkEvenOrOdd = () => {
  if (value % 2 == 0) {
    console.log('O número é par!');
  } else {
    console.log('O número é ímpar!')
  }
}

checkEvenOrOdd();
