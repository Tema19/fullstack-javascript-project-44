import readlineSync from 'readline-sync';
export function progressionGame() {
    console.log('What number is missing in the progression?');
    for(let i = 0; i < 3; i++){
        var list = [ 1, 2, 3, 4, 5, 6, 7 ];
        const number = Math.floor(Math.random() * 10);
        for (let i = 0; i < list.length; i += 1) {
        list[i] = list[i] * number;
        list[i] = list[i] + number;
        }
        let ind = Math.floor(Math.random() * 7);
        let result = list[ind]; 
        list[ind] = '..';
    console.log('Question: ' + list);
    const answer = readlineSync.question('Your answer: ');
    if (answer == result) {
        console.log("Correct!");
    } else {
        console.log("'" + answer + "'", "is wrong answer ;(. Correct answer was", "'" + result + "'", ".");
        return false;
    }
}
};