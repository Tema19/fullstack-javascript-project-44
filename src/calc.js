import readlineSync from 'readline-sync';
export function calcGame() {
    console.log('What is the result of the expression?');
    for(let i = 0; i < 3; i++){
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operations = ["+", "-", "*"];
    const operation = operations[Math.floor(Math.random() * operations.length)]
    const formula = number1 + operation + number2;
    const result = eval(formula);
    console.log('Question: ' + number1 +" "+ operation +" "+ number2);
    const answer = readlineSync.question('Your answer: ');
    if (answer == result) {
        console.log("Correct!");
    } else {
        console.log("'" + answer + "'", "is wrong answer ;(. Correct answer was", "'" + result + "'", ".");
        return false;
    }
}
}