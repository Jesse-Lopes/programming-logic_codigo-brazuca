const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const numbers = [];

const identifyNumbers = (numbers, samples) => {
  let counter = 0;

  for (let i = 0; i <= samples.length; i++) {
    numbers[i] = parseInt(samples.shift());

    if (numbers[i] >= 0) {
      counter++;
    }
  }

  console.log(`Apenas ${counter} são positivos`);
}

identifyNumbers(numbers, samples);
