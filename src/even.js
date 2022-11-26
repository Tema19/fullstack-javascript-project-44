import readlineSync from 'readline-sync';

export default function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no":');
  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer == 'yes' && number % 2 == 0 || answer == 'no' && number % 2 == 1) {
      console.log('Correct!');
    } else if (answer == 'no' && number % 2 == 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return false;
    } else if (answer == 'yes' && number % 2 == 1) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return false;
    } else {
      console.log('Wrong input!');
      return false;
    }
  }
}
