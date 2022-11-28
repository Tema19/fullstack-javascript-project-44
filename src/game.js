import readlineSync from 'readline-sync';

export default function game3(Game) {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (Game() === false) { return console.log(`Let's try again, ${name}!`); }
  return console.log(`Congratulations, ${name}!`);
}
