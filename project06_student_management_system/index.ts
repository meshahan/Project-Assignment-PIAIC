#! /usr/bin/env node 

import inquirer from "inquirer"

// Define Student Class
class Student {
  static counter = 1000;
  id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.id = Student.counter++
    this.name = name
    this.courses = [] // Empty for Courses
    this.balance = 100
  }
  // Method to entroll an Student
  enrollCourse(course: string) {
    this.courses.push(course)
  }
  // Method to View Student Balance
  viewBalance() {
    console.log(`Balance for ${this.name}:$${this.balance}`);
  }
  // Method to Pay Fee
  payFee(amount: number) {
    this.balance -= amount
    console.log(`$${amount}Fees paid successfully for ${this.name}`);
  }
  //Method to show Student Balance
  showStatus() {
    console.log("ID", this.id);
    console.log("Name", this.name);
    console.log("Course", this.courses);
    console.log("Balance", this.balance);
  }

}

// Create Student Manager to Manage Student Class

class studentManager{
  students:Student[]

  constructor(){
    this.students=[];
  }
//Method to add Student in a Course
   addStudent(name:string){
   let student = new Student(name);
   this.students.push(student)
   console.log(`Student ${name} added Successfully ${student.id}`);
  }
//Method to Enroll and Student in a Course
enrollStudent(studentId:number,course:string){
 let studentFound =this.findStudent(studentId) ;
 if(studentFound){
    studentFound.enrollCourse(course)
    console.log(`${studentFound.name} enrolled Successfully in ${course}`);
     }
 }
 // Method to view Student Balance
 viewStudentBalance(studentId:number){
  let studentFound = this.findStudent(studentId)
  if(studentFound){
     studentFound.viewBalance()
    }
     else{console.log("Student not found Please Enter Correct Student ID:");
    }
  }
  // Method to Pay Student Fee
  payStudentFee(studentId:number,amount:number){
    let studentFound = this.findStudent(studentId)
    if(studentFound){
      studentFound.payFee(amount)
     }
      else{console.log("Student not found Please Enter Correct Student ID:");
     }
  }
  //Method to Display Student Status
  showStudentStatus(studentId:number){
    let studentFound = this.findStudent(studentId)
    if(studentFound){
      studentFound.showStatus()
     }
      else{console.log("Student not found Please Enter Correct Student ID:");
     }
  }
//Method to find Student by Student ID 
   findStudent(studentId:number){
    return this.students.find(std=>std.id === studentId) 
  }
   
}
//Create Main Function to Run the Programme
async function main() {
  console.log("Welcome to 'King of Codes' - Student Registration Programme ");
  console.log("-".repeat(50));
  let StdManager=new studentManager();
// While Loop to Keep Programme running
  while (true) {
    let choice = await inquirer.prompt([
      {
        name:"choice",
        type:"list",
        message:"Select an Option",
        choices:[
          "Add Student",
          "Enroll Student",
          "View Student Balance",
          "Pay Fees",
          "Show Status",
          "Exit"
        ]

      }
    ]);
    //Using if Switch Case for User Choice instead to if/else Statements
    switch(choice.choice){
    case "Add Student":
        let nameInput = await inquirer.prompt([{
          name:"name",
          type:"input",
          message:"Enter Student Name:"
        }
      ]);
      StdManager.addStudent(nameInput.name);
      break;
          case "Enroll Student":
          let courseInput = await inquirer.prompt([{
            name:"studentID",
            type:"number",
            message:"Enter Student ID:",
            },
            {
            name:"course",
            type:"input",
            message:"Enter Course Name:",
            },
        ]);
        StdManager.enrollStudent(courseInput.studentID,courseInput.course);
        break;

          case "View Student Balance":
          let inputBalance = await inquirer.prompt([{
            name:"studentID",
            type:"number",
            message:"Enter Student ID:",
            }
        ]);
        StdManager.viewStudentBalance(inputBalance.studentID);
        break;

          case "Pay Fees":
          let inputFees = await inquirer.prompt([{
            name:"studentID",
            type:"number",
            message:"Enter Student ID:",
            },
            {
            name:"amount",
            type:"number",
            message:"Enter Amount to Pay:",
            }
        ]);
        StdManager.payStudentFee(inputFees.studentID,inputFees.amount);
        break;
        case "Show Status":
          let inputStatus = await inquirer.prompt([{
            name:"studentID",
            type:"number",
            message:"Enter Student ID:",
            },

         ]);
        StdManager.showStudentStatus(inputStatus.studentID);
        break; 

        case "Exit":
        console.log("Exiting......");
        process.exit()
    }   
  }
}
//Calling the Main Function
main();

