const process = require('process');
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

process.on('SIGINT', () => {
  console.log('This important software is now closing');
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});
