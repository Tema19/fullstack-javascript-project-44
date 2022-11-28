import readlineSync from 'readline-sync';
import prime from './prime-func.js';

export default function primeGame() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (((answer === 'yes') && (prime(number) === true)) || ((answer === 'no') && (prime(number) === false))) {
      console.log('Correct!');
    } else if ((answer === 'no') && (prime(number) === true)) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return false;
    } else if ((answer === 'yes') && (prime(number) === false)) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return false;
    } else {
      console.log('Wrong input!');
      return false;
    }
  }
  return true;
}
