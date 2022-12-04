import readlineSync from 'readline-sync';
import randomInteger from '../utils/randomNumber.js';

export default function progressionGame() {
  console.log('What number is missing in the progression?');
  for (let y = 0; y < 3; y += 1) {
    const list = [1, 2, 3, 4, 5, 6, 7];
    const number = randomInteger(1,15);
    for (let i = 0; i < list.length; i += 1) {
      list[i] *= number;
      list[i] += number;
    }
    const ind = randomInteger(0,6);
    const result = list[ind];
    list[ind] = '..';
    console.log(`Question: ${list.join(' ')}`);
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
