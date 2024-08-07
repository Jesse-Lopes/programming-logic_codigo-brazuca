const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const temperature = parseFloat(sample.shift());

const informeTemperature = (temperature) => {
  if (temperature < 15) {
    return 'O tempo está frio!';
  } else if (temperature > 30) {
    return 'O tempo está quente!';
  } else {
    return 'O tempo está agradável';
  }
}

const result = informeTemperature(temperature);

console.log(result);
