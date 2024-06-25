#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold("Welcome to PIAIC Exchange"));
// defince currency rates
let exchangeRate = {
    "USD": 1, // Base Currency
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 200,
};
//Prompt the User to Select Currencies
let userAns = await inquirer.prompt([
    {
        name: "from_currency",
        message: "Select the Currency to Convert from:",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        message: "Select the Currency to Convert into:",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter amount to be Converted:",
    }
]);
// Define Variables to Built Formulga
let CnvFrom = exchangeRate[userAns.from_currency];
let CnvTo = exchangeRate[userAns.to_currency];
let Amount = userAns.amount;
// Built Formulta to covert the currency rate
let baseAmount = Amount / CnvFrom;
let cnvAmount = baseAmount * CnvTo;
// Display the Converted Amount
console.log(chalk.bold.bgGreen(`Converted Amount = ${cnvAmount.toFixed(2)}`));
