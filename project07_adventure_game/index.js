#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    reduceEnergy() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    increasedEnergy() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    reduceEnergy() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    increasedEnergy() {
        this.fuel = 100;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please Select Your Oponent:",
    choices: ['Skelton', 'Assasin', 'Zombie']
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
console.log(p1);
console.log(o1);
do {
    if (opponent.select == "Skelton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Please Select Action:",
            choices: ['Attack', 'Drink Portion', 'Run for your Life....']
        });
        if (ask.option == 'Attack') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.reduceEnergy();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(" You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.reduceEnergy();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(" You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.option == 'Drink Portion') {
            p1.increasedEnergy();
            console.log(chalk.bold.italic.green(`You Drink Energy Your Health is increased to ${p1.fuel}`));
        }
        if (ask.option == 'Run for your Life....') {
            console.log(chalk.bold.italic.red(" You Loose Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent.select == 'Assasin') {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Please Select Action:",
            choices: ['Attack', 'Drink Portion', 'Run for your Life....']
        });
        if (ask.option == 'Attack') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.reduceEnergy();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(" You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.reduceEnergy();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(" You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.option == 'Drink Portion') {
            p1.increasedEnergy();
            console.log(chalk.bold.italic.green(`You Drink Energy Your Health is increased to ${p1.fuel}`));
        }
        if (ask.option == 'Run for your Life....') {
            console.log(chalk.bold.italic.red(" You Loose Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent.select == 'Zombie') {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Please Select Action:",
            choices: ['Attack', 'Drink Portion', 'Run for your Life....']
        });
        if (ask.option == 'Attack') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.reduceEnergy();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(" You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.reduceEnergy();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(" You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.option == 'Drink Portion') {
            p1.increasedEnergy();
            console.log(chalk.bold.italic.green(`You Drink Energy Your Health is increased to ${p1.fuel}`));
        }
        if (ask.option == 'Run for your Life....') {
            console.log(chalk.bold.italic.red(" You Loose Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
