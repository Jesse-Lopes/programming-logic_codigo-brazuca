const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const year = parseInt(sample.shift());

const identifyYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log(`O ano ${year} é Bissexto.`);
  } else {
    console.log(`O ano ${year} não é Bissexto.`);
  }
}

identifyYear(year);
