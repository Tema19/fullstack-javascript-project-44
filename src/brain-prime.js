import readlineSync from 'readline-sync';
export function primeGame() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for(let i = 0; i < 3; i++){
            const integer = Math.floor(Math.random() * 10);
            const float = Math.random()
            const array = [float, integer]
            const number = array[Math.floor(Math.random() * 2)];
            console.log('Question: '+ number)
            const answer = readlineSync.question('Your answer: ');
            if (answer == 'yes'&& number == integer || answer == 'no'&& number == float ) {
                console.log("Correct!");
            } else if (answer == 'no'&& number == integer){
                console.log("'no' is wrong answer ;(. Correct answer was 'yes'."); 
                return false;
            } else if (answer == 'yes'&& number == float){
                console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
                return false 
            } else {
                console.log("Wrong input!");
            }
        }
}