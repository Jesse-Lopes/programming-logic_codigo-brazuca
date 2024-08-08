const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const searchValues = (samples) => {
  let values = [];
  let i = 0;
  
  while (i < samples.length) {
    let currentValue = parseInt(samples[i]);
  
    if (currentValue === 0) {
      break;
    }
  
    values.push(currentValue);
  
    i += 1;
  }

  return values;
}

const calculateValues = (values) => {
  let sum = 0;
  let counter = 0;

  while (counter < values.length) {
    sum += values[counter];

    counter += 1;
  }

  return sum;
}

const values = searchValues(samples);
const result = calculateValues(values);

console.log(result);
