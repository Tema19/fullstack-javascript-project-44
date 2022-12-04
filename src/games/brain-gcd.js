import readlineSync from 'readline-sync';
import gcd from '../utils/gcd-func.js';
import randomInteger from '../utils/randomNumber.js';

export default function gcdGame() {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomInteger(1, 15);
    const number2 = randomInteger(1, 15);
    console.log(`Question: ${number1} ${number2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const result = gcd(number1, number2);
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}'`, 'is wrong answer ;(. Correct answer was', `'${result}'`, '.');
      return false;
    }
  }
  return true;
}
