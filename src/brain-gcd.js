import readlineSync from 'readline-sync';
import { gcd } from "../src/gcd-func.js";
export function gcdGame() {
    console.log('Find the greatest common divisor of given numbers.');
    for(let i = 0; i < 3; i++){
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    console.log('Question: ' + number1 + " " + number2);
    const answer = readlineSync.question('Your answer: ');
    let result = gcd(number1, number2);
    if (answer == result) {
        console.log("Correct!");
    } else {
        console.log("'" + answer + "'", "is wrong answer ;(. Correct answer was", "'" + result + "'", ".");
        return false;
    }
}
};