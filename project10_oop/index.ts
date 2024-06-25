#! /usr/bin/env node 
import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string){
        this.name = n
    }
}

class Person {
  students:Student[]=[]
  addStudent(obj:Student){
  this.students.push(obj)
}
}

const persons = new Person()
const programStart = async (persons:Person)=>{
do{console.log("Welcome!");
    const ans = await inquirer.prompt({
        name:"select",
        type:"list",
        message:"Whom would you like to interact with",
        choices:["Staff",'Student',"Exit"]
    })
    if (ans.select == "Staff"){
        console.log("You are enter into the staff room.Please feel free to ask any question.");
    }else if (ans.select == 'Student'){
        const ans = await inquirer.prompt({
            name:"student",
            type:"input",
            message:"Enter the Student Name You Wish to Communicate"
        })
        const student = persons.students.find(Val=>Val.name == ans.student)
        if(!student){
    
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hellow i am ${name.name}.Nice to meet you!`);
            console.log("New Student Added");
            console.log("Current Student List");
            console.log(persons.students);
            }else{
                console.log(`Hello i am ${student.name}.Nice to See you again!`);
                console.log("Existing Student");
                console.log(persons.students);
            }
    }
    else if (ans.select =="Exit"){
        console.log("Exiting the Programme.....");
        process.exit()
    }}while(true)

}
programStart(persons)