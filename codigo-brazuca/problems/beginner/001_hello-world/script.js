const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const message = sample.shift();

const printMessage = (text) => {
  return text;
}

const result = printMessage(message);

console.log(result);
