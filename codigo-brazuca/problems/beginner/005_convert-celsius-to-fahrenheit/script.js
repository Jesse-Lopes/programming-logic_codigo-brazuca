const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const celsius = parseFloat(sample.shift());

const convertCelsiusToFahrenheit = (celsius) => {
  const temperatureMagnitude = 9/5;
  const freezingPointOfWater = 32;

  return (celsius * temperatureMagnitude) + freezingPointOfWater;
}

const result = convertCelsiusToFahrenheit(celsius);

console.log(result);
