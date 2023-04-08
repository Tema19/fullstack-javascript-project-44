import prime from '../utils/prime-func.js';
import getRandomInRange from '../utils/randomInRange.js';
import engine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRound = () => {
  const num = getRandomInRange(0, 100);
  const question = `${num}`;
  const answer = String(prime(num) ? 'yes' : 'no');
  return [question, answer];
};

const runPrimeGame = () => engine(rules, generateRound);
export default runPrimeGame;
