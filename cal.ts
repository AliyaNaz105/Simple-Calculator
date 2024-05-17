#! /usr/bin/env node
import inquirer from "inquirer";
//printing a welcome msg
console.log("\n\tWellcome to \`CodeWithAliya\` - CLI Simple Calculator\n");
//Asking question from user through inquirer
let answer = await inquirer.prompt([
    {message : "Enter your first number" , type: "number" , name: "firstNumber"},
    {message : "Enter second number", type:"number", name: "secondNumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition" , "Subtraction" , "Multiplication" , "Division"],
},

]);
//conditional statement If-Else
if(answer.operator=="Addition"){

    console.log(answer.firstNumber+answer.secondNumber)

}
else if (answer.operator=="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operator=="Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)}
else if (answer.operator=="Division"){
        console.log(answer.firstNumber / answer.secondNumber)}

 else{
            console.log("Invalid input")
        }
