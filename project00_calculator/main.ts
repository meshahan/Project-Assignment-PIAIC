#! /usr/bin/env node 
import inquirer from "inquirer"


let answer = await inquirer.prompt([{
    name:'num1',
    type:"number",
    message:' Please enter your first number here'
},{name:'num2',
type:"number",
message:' Please enter your second number here'
},{name:'Operator',
type:"list",
message:' Please select the operator:',
choices:["+","-","*","/"]
}
])

// Variable Decleration

let n1:number = answer.num1
let n2:number = answer.num2
let opt:string=answer.Operator

// Conditional Statement

if (opt==="+"){
    console.log(`${n1} + ${n2} = ${n1+n2}`)
}else if (opt==="-") {
    console.log(`${n1} - ${n2} = ${n1-n2}`)
}else if (opt==="*") {
    console.log(`${n1} * ${n2} = ${n1*n2}`)
    }else if (opt==="/") {
    console.log(`${n1} / ${n2} = ${n1/n2}`)
}