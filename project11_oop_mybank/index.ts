#! /usr/bin/env node 
import { faker } from '@faker-js/faker';
import chalk from 'chalk';
import inquirer from 'inquirer';


//Customer Class
class Customer {

    firstName: string
    lastName: string
    age: number
    gender: string
    mobNumber: number
    accNumber: number

    constructor(fName: string, lName: string, age: number, gender: string, mob: number, acc: number) {
        this.firstName = fName
        this.lastName = lName
        this.age = age
        this.gender = gender
        this.mobNumber = mob
        this.accNumber = acc
    }
}
//interface BankAccount
interface BankAccount {
    accNumber: number,
    balance: number
}
//Class Bank
class Bank {
    customer: Customer[] = []
    account: BankAccount[] = []

    addCustomer(obj: Customer) {
        this.customer.push(obj)
    }
    addAccNumber(obj: BankAccount) {
        this.account.push(obj)
    }
    transaction(accobj:BankAccount){
       let NewAccounts = this.account.filter(acc=>acc.accNumber!==accobj.accNumber); 
       this.account = [...NewAccounts,accobj]
    }
};

let myBank = new Bank();

//Customer Creation
for (let i: number = 1; i <= 3; i++) {
    let fName = faker.person.firstName("male");
    let lName = faker.person.lastName();
    let mob = parseInt(faker.phone.number());
    const cus = new Customer(fName, lName, 25 * i, "male", mob, 1000 + i)
    myBank.addCustomer(cus)
    myBank.addAccNumber({ accNumber: cus.accNumber, balance: 100 * i })
}

//Bank Functionality

async function bankService(bank: Bank) {
    do{  let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Please Select the Service:",
        choices: ['View Balance', 'Cash Withdraw', 'Cash Deposit','Exit']
    });

    // View Balance
    if (service.select == 'View Balance') {
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: "Please Enter Your account Number:"
        })
        let account = myBank.account.find((acc) => acc.accNumber == res.number)
        if (!account) { console.log(chalk.red.bold("Invalid Account Number")); }
        if (account) {
            let name = myBank.customer.find((item) => item.accNumber == account.accNumber)
            console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} Your Account Balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
        }
        // {console.log(chalk.green.italic('Account Exist'))}
    }

    // Cash WithDraw
    if (service.select == 'Cash Withdraw') {
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: "Please Enter Your account Number:"
        });
        let account = myBank.account.find((acc) => acc.accNumber == res.number)
        if (!account) { console.log(chalk.red.bold("Invalid Account Number")); }
        if(account){let ans = await  inquirer.prompt(
            {
            type:"number",
            message:"Please Enter Your Amount to WithDraw:",
            name:"rupee"
        }
    );
        if(ans.rupee > account.balance )
            {
            console.log(chalk.bold.bgRedBright(" You have Insufficient Balance to Transfer"))
            console.log(chalk.red.bold(`Your Remaining Balance is  is ${account.balance}`))
        }
        if(ans.rupee < account.balance )
            {
            console.log(chalk.bold.bgGreenBright(" You Transaction has been succesfully completed"))
            let newBalance = account.balance - ans.rupee;
            //Transaction Method Call 
            bank.transaction({accNumber:account.accNumber,balance:newBalance});
            console.log(chalk.yellow.bold(`Your Remaining Balance is  is ${newBalance}`));
        }
             

    }
     }

    //Cash Deposit
    if (service.select == 'Cash Deposit')  {
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: "Please Enter Your account Number:"
        });
        let account = myBank.account.find((acc) => acc.accNumber == res.number)
        if (!account) { console.log(chalk.red.bold("Invalid Account Number")); }
        if(account){let ans = await  inquirer.prompt(
            {
            type:"number",
            message:"Please Enter Your Amount to Deposit:",
            name:"rupee"
        }
    );
        let newBalance = account.balance + ans.rupee;

        //Transaction Method Call 
        bank.transaction({accNumber:account.accNumber,balance:newBalance})
        console.log(chalk.bold.greenBright(`Your New Balance is ${newBalance}`));

    }
     }

     if (service.select == 'Exit')  {
        console.log("Exit");
        console.log("Exiting......");
        process.exit()}
        
    
}while(true)

   
}

bankService(myBank)