const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

let message;

const searchMessage = (sample) => {
  for (let i = 0; i < sample.length; i++) {
    message = sample[i].trim();
  }

  return message;
}

let letter = 'l';

const counterLetter = (message, letter) => {
  let counter = 0;
  
  for (let i = 0; i < message.length; i++) {
    if (message[i].toLowerCase() === letter.toLowerCase()) {
      counter++;
    }
  }

  return counter;
}

searchMessage(sample);

const result = counterLetter(message, letter);

console.log(result);
