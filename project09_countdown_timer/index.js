#! /usr/bin/env node 
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
let res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please Enter the amount of Second(1-60):",
    validate: (input) => {
        if (isNaN(input)) {
            return "Enter a Valid Number Please:";
        }
        else if (input > 60) {
            return " Seconds must be less than 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const iniTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(iniTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has Expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
