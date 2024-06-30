#!/user/bin/env node
//Import the inquirer modulw which is a command line interface for Node.js & chalks for colors
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("========================================="));
console.log(chalk.greenBright("    Welcome To Word Counter    "));
console.log(chalk.red("========================================="));
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words:",
    },
]);
const words = answer.Sentence.trim().split(" ");
//print the arry on the console
console.log(words);
// prinnt the word coun of the sentence on the console
console.log(`Your sentence word count is ${words.length}`);
