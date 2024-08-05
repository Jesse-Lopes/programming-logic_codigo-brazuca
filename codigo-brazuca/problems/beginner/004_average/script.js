const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const grades = [];

const calculateAverage = (grades, samples) => {
  for (let i = 0; i <= samples.length; i++) {
    grades.push(parseFloat(samples.shift()));
  }

  let sum = 0;

  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }

  return sum / grades.length;
}

const result = calculateAverage(grades, samples);

console.log(result.toFixed(2));
