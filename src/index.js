import readlineSync from 'readline-sync';

function engine(gameRules, generateRound) {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameRules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, result] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}'`, 'is wrong answer ;(. Correct answer was', `'${result}'`, '.');
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export default engine;
