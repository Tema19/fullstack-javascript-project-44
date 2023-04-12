import getRandomInRange from '../utils/randomInRange.js';
import engine from '../index.js';

function gcd(number1, number2) {
  let x = number1;
  let y = number2;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

const rules = 'Find the greatest common divisor of given numbers.';
const generateRound = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return [question, answer];
};

const runGcdGame = () => engine(rules, generateRound);
export default runGcdGame;
