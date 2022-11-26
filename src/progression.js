import readlineSync from 'readline-sync';

export default function progressionGame() {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i++) {
    const list = [1, 2, 3, 4, 5, 6, 7];
    const number = Math.floor(Math.random() * 10);
    for (i = 0; i < list.length; i += 1) {
      list[i] = list[i] * number;
      list[i] = list[i] + number;
    }
    const ind = Math.floor(Math.random() * 7);
    const result = list[ind];
    list[ind] = '..';
    console.log(`Question: ${list.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      return 'Correct!';
    }
    console.log(`'${answer}'`, 'is wrong answer ;(. Correct answer was', `'${result}'`, '.');
    return false;
  }
}
