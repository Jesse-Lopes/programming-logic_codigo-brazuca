const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const informations = [];

for (let i = 0; i <= samples.length; i++) {
  informations[i] = samples.shift();
}

const name = informations[0];
const homeTown = informations[1];

const printMessages = (name, homeTown) => {
  return `Meu nome é ${name} e minha cidade natal é ${homeTown}.`;
}

const result = printMessages(name, homeTown);

console.log(result);
