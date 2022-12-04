import readlineSync from 'readline-sync';
import calculate from '../utils/calculate.js';
import randomInteger from '../utils/randomNumber.js';

export default function calcGame() {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomInteger(1, 15);
    const number2 = randomInteger(1, 15);
    const operations = ['+', '-', '*'];
    const operation = operations[randomInteger(0, 2)];
    const result = calculate(number1, number2, operation);
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}'`, 'is wrong answer ;(. Correct answer was', `'${result}'`, '.');
      return false;
    }
  }
  return true;
}
