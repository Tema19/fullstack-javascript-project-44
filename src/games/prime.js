import getRandomInRange from '../utils/randomInRange.js';
import engine from '../index.js';

function prime(x) {
  const array = [];
  for (let i = 1; i <= x; i += 1) {
    if (x % i === 0) {
      array.push(i);
    }
  }
  if (array.length === 2) {
    return true;
  }
  return false;
}

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRound = () => {
  const num = getRandomInRange(0, 100);
  const question = `${num}`;
  const answer = String(prime(num) ? 'yes' : 'no');
  return [question, answer];
};

const runPrimeGame = () => engine(rules, generateRound);
export default runPrimeGame;
