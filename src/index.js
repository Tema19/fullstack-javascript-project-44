import readlineSync from 'readline-sync'
const roundsCount = 3; 
const engine = (gameRules, generateRound) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    console.log(gameRules);
    for (let i = 0; i < roundsCount; i += 1) {
        const [question, result] = generateRound; 
        console.log(question);
        const answer = readlineSync.question('Your answer: ');
        if (answer === result) {
          console.log('Correct!');
        } else {
          console.log(`'${answer}'`, 'is wrong answer ;(. Correct answer was', `'${result}'`, '.');
          return console.log(`Let's try again, ${name}!`);
        }
        return console.log(`Congratulations, ${name}!`);
    } 
}
