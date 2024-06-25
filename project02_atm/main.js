#! /usr/bin/env node 
import inquirer from "inquirer";
import { faker } from '@faker-js/faker';
const createUsr = () => {
    let users = [];
    for (let i = 0; i <= 5; i++) {
        let user = {
            name: faker.person.fullName(),
            id: i,
            pin: 1000 + i,
            accountNumber: Math.floor(100000000 * Math.random() * 9000000000),
            balance: 1000000 * i,
        };
        users.push(user);
    }
    return users;
};
// ATM Machine Program
const atmMachine = async (users) => {
    const res = await inquirer.prompt({
        type: 'number',
        message: "Please Enter Your Pin Code",
        name: "pin"
    });
    const user = users.find(val => val.pin == res.pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        return atmFunc(user);
    }
    console.log('Invalid User Name');
};
// ATM Function
const atmFunc = async (user) => {
    const ans = await inquirer.prompt({
        type: 'list',
        name: "select",
        message: "What do you want to do?",
        choices: ['Withdraw', 'Balance', 'Deposit', 'Exit']
    });
    if (ans.select === 'Withdraw') {
        const amount = await inquirer.prompt({
            type: "number",
            message: "Enter Amount",
            name: "rupee"
        });
        if (amount.rupee > user.balance) {
            return console.log('Your balance is insufficient');
        }
        if (amount.rupee > 25000) {
            return console.log('You cannot withdraw more than 25000');
        }
        console.log(`Withdraw Amount: ${amount.rupee}`);
        console.log(`Balance Amount: ${user.balance - amount.rupee}`);
    }
    if (ans.select === 'Balance') {
        console.log(`Balance: ${user.balance}`);
    }
    if (ans.select === 'Deposit') {
        const deposit = await inquirer.prompt({
            type: "number",
            message: "Please Enter your Deposit Amount:",
            name: "Rupees"
        });
        console.log(`Deposit Amount: ${deposit.Rupees}`);
        console.log(`Total Balance: ${user.balance + deposit.Rupees}`);
    }
    if (ans.select === 'Exit') {
        console.log('Thanks for using ATM');
        process.exit();
    }
    console.log(ans);
};
const users = createUsr();
atmMachine(users);
