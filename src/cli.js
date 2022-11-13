import readlineSync from 'readline-sync';

export const greetings = () => {
const name = readlineSync.question('What is your name?: ');
console.log("Hello, "+ name);
};