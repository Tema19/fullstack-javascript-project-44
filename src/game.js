import readlineSync from 'readline-sync';
export const game_3 = (Game) => {
    const name = readlineSync.question('What is your name?: ');
    console.log("Hello, "+ name);
    if (Game() == false) 
    {return console.log("Let's try again, " + name + "!");}
    return console.log("Congratulations, " + name + "!");
}