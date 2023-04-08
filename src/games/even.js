import getRandomInRange from '../utils/randomInRange.js';
import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no":';
const calculation = (number) => { return (number % 2 === 0) ? 'yes' : 'no'; };

const generateRound = () => {
  const num = getRandomInRange(0, 100);
  const question = `${num}`;
  const answer = String(calculation(num));
  return [question, answer];
};

const runEvenGame = () => engine(rules, generateRound);
export default runEvenGame;
