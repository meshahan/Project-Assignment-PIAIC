#! /usr/bin/env node 

import inquirer from "inquirer";

console.log('Welcome to my Adventure Quiz Game');
console.log("You are required to gain maximum 4 points for th window.");

let points:number = 0

let Q1 = await inquirer.prompt([{

    name:"one",
    type:"list",
    message: " Ts is Superset of Js",
    choices:["python","javaScript","java","c++"]

}
])
if (Q1.one=="javaScript"){
    console.log("Your answer is Correct");
    points++
}else{console.log("Your answer is incorrect");}

let Q2 = await inquirer.prompt([{

    name:"two",
    type:"list",
    message: " Who is the Founder of Mircrosoft",
    choices:["Bill Gates","Elon Musk","Mailk Riaz","Imran Khan"]

}
])
if (Q2.two=="Bill Gates"){
    console.log("Your answer is Correct");
    points++
}else{console.log("Your answer is incorrect");}


let Q3 = await inquirer.prompt([{

    name:"three",
    type:"list",
    message: " The Biggest City of Pakistan is ",
    choices:["Islamabad","Lahore","Karachi","Hyderabad"]

}
])
if (Q3.three=="Karachi"){
    console.log("Your answer is Correct");
    points++
}else{console.log("Your answer is incorrect");}

let Q4 = await inquirer.prompt([{

    name:"four",
    type:"list",
    message: " The Capital of Pakistan is : ",
    choices:["Islamabad","Lahore","Karachi","Hyderabad"]

}
])
if (Q4.four=="Islamabad"){
    console.log("Your answer is Correct");
    points++
}else{console.log("Your answer is incorrect");}


let Q5 = await inquirer.prompt([{

    name:"five",
    type:"list",
    message: " Quid E Azam Born in : ",
    choices:["Islamabad","Lahore","Karachi","Hyderabad"]

}
])
if (Q5.five=="Karachi"){
    console.log("Your answer is Correct");
    points++
}else{console.log("Your answer is incorrect");}

if(points>=4){
    console.log("Congratulation You have Passed the Test");
    console.log(`Your Points are : ${points}`);
}else{
    console.log("Unfourtunely You are failed to Passed the Test.Do Preparation and try in Next Session");
    console.log(`Your Points are : ${points}`);
}
