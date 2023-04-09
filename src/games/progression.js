import getRandomInRange from '../utils/randomInRange.js';
import engine from '../index.js';
import progression from '../utils/progression.js';

const rules = 'What number is missing in the progression?';
const generateRound = () => {
  const arrProgr = progression();
  const hideArrProgt = [...arrProgr];
  const ind = getRandomInRange(0, 6);
  hideArrProgt[ind] = '..';
  const question = `${hideArrProgt.join(' ')}`;
  const answer = String(arrProgr[ind]);
  return [question, answer];
};

const runProgressionGame = () => engine(rules, generateRound);
export default runProgressionGame;
