import getRandomInRange from '../utils/randomInRange.js';
import engine from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const rules = 'What number is missing in the progression?';
function generateRound() {
  const randomStart = getRandomInRange(2, 50);
  const randomStep = getRandomInRange(2, 150);
  const progression = generateProgression(randomStart, randomStep, 6);
  const progressinWithHideSymbol = [...progression];
  const indexOfHideSymbol = getRandomInRange(0, 5);
  progressinWithHideSymbol[indexOfHideSymbol] = '..';
  const question = `${progressinWithHideSymbol.join(' ')}`;
  const answer = String(progression[indexOfHideSymbol]);
  return [question, answer];
}

const runProgressionGame = () => engine(rules, generateRound);
export default runProgressionGame;
