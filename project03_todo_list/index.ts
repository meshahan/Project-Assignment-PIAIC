#! /usr/bin/env node 
import inquirer from "inquirer"

let todos:string[]=["Ali","Bilal"]


async function createTodo(todos:string[]){

    do{
        let ans = await inquirer.prompt({
            type:"list",
            message:"Select an Operator",
            name:"Select",
            choices:["Add","Update","View","Delete","Exit"]
        })
    
        if(ans.Select == "Add"){
            let addTodo = await inquirer.prompt({
                type:"input",
                message: " Add Items..",
                name:"todo"
            });
    
            todos.push(addTodo.todo)
            console.log(todos);
        }
        if(ans.Select == "Update"){
            let updateTodo = await inquirer.prompt({
                type:"list",
                message: " Select items for update",
                name:"todo",
                choices:todos.map(item =>item)
            });
            
            let addTodo = await inquirer.prompt({
                type:"input",
                message: " Add Items..",
                name:"todo"
            });
            let newTodos = todos.filter(val=>val !== updateTodo.todo)
            todos=[...newTodos,addTodo.todo]
            console.log(todos);
        }
        if(ans.Select == "View"){console.log(todos)}
        
        if(ans.Select == "Delete"){
            let deleteTodo = await inquirer.prompt({
            type:"list",
            message: " Select items to delete",
            name:"todo",
            choices:todos.map(item =>item)            
        })
        
        let newTodos = todos.filter(val=>val !== deleteTodo.todo)
            todos=[...newTodos]
            console.log(todos);
         }
        if (ans.Select == "Exit"){
            console.log("Exiting......")
            process.exit()}
       
        } while(true)
            
  
}

createTodo(todos)
console.log(createTodo);