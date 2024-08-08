const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const createShoppingList = (samples) => {
  const fruitList = [];
  let i = 0;

  while (i < samples.length) {
    let currentFruit = samples[i];

    fruitList.push(currentFruit);

    i++
  }

  return fruitList;
}

const result = createShoppingList(samples);

console.log(result);
