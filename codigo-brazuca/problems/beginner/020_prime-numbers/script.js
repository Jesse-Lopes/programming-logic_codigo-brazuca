const input = require('fs').readFileSync('./dev/stdin',  'utf8');
const samples = input.split('\n');

const searchNumber = (samples) => {
  const numbers = [];

  for (let i = 0; i < samples.length; i++) {
    let currentNumber = parseInt(samples[i]);

    if (!isNaN(currentNumber)) {
      numbers.push(currentNumber);
    }
  }

  return numbers;
}

const checkPrimeNumber = (numbers) => {
  let results = [];

  for (let number of numbers) {
    let primo = true;

    if (number < 2) {
      results.push(`${number} não é um número primo!`);
      primo = false;
      continue;
    }
    
    for (let i = 2; i <= number / 2; i ++) {
      if (number % i === 0) {
        results.push(`${number} não é um número primo!`);
        primo = false;
        break;
      }
    }

    if (primo) {
      results.push(`${number} é um número primo`);
    }
  }

  return results;
}

const numbers = searchNumber(samples);
const result = checkPrimeNumber(numbers);

console.log(result);
