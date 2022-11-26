import readlineSync from 'readline-sync';

export const greetings = () => {
let name = readlineSync.question('What is your name?: ');
console.log("Hello, "+ name);
}
