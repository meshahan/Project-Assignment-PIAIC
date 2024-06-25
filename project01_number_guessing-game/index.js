#! /usr/bin/env node 
import inquirer from 'inquirer';
console.log('Welcome to Number Guessing Game\n');
const secretNumber = Math.floor(Math.random() * 10 + 1);
console.log(secretNumber);
let myLoop = true;
let attemps = 1;
while (myLoop) {
    const userInput = await inquirer.prompt({
        type: 'number',
        name: "guessedNumber",
        message: "Please Enter Your Guessing Number:!"
    });
    let { guessedNumber } = userInput;
    if (guessedNumber === secretNumber)
        wonMatch();
    if (guessedNumber > secretNumber)
        greaterNumber();
    if (guessedNumber < secretNumber)
        smallerNumber();
    function wonMatch() {
        console.log(`Congratulations ! The Number ${guessedNumber} You Guessed is Correct`);
        console.log(`\nYou have attempt ${attemps} Times to Get the Correct Number`);
        myLoop = false;
    }
    function greaterNumber() {
        console.log('Try Again ! The Number You Guessed is Greater than the Correct');
        attemps++;
    }
    function smallerNumber() {
        console.log('Try Again ! The Number You Guessed is Less than the Correct');
        attemps++;
    }
}
