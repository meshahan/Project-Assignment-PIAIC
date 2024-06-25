#! /usr/bin/env node 

import inquirer from "inquirer"

function counter(paraGraph:string) {
    let freeWhiteSpace = paraGraph.replace(/\s/g,"")
    return freeWhiteSpace.length
}

async function startWordCounter(counter:(text:string)=>number) {
  do{  let res = await inquirer.prompt({
    type:"input",
    message:"write ParaGraph here.....",
    name:"paragraph"
})
console.log(counter(res.paragraph));
}
while(true)
}

startWordCounter(counter)