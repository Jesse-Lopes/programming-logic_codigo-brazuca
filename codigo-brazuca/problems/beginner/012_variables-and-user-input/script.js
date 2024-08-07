const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const informations = [];

for (let i = 0; i <= samples.length; i++) {
  informations[i] = samples.shift();
}

const favoriteMovie = informations[0];
const releaseYear = informations[1];

const printMessages = (favoriteMovie, releaseYear) => {
  return `Meu filme favorito é ${favoriteMovie} e foi lançado em ${releaseYear}.`;
}

const result = printMessages(favoriteMovie, releaseYear);

console.log(result);
