const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const searchNumbers = (samples) => {
  let numbers = [];

  for (let i = 0; i < samples.length; i++) {
    let currentNumbers = parseInt(samples[i]);

    if (!isNaN(currentNumbers)) {
      numbers.push(currentNumbers);
    }
  }

  return numbers;
}

const checkEvenOrOdd = (numbers) => {
  let results = '';

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      results += `O número ${numbers[i]} é par!\n`;
    }
    
    if (numbers[i] % 2 !== 0) {
      results += `O número ${numbers[i]} é ímpar!\n`;
    }
  }

  return results;
}

const numbers = searchNumbers(samples);
const result = checkEvenOrOdd(numbers);

console.log(result);
