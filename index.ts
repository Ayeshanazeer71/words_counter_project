#!/usr/bin/env node

import inquirer from "inquirer";


// Declare a const "asnwer" and assign it to the result of inquirer.prompt function

const asnwers: {

    Sentence: string
    
} = await inquirer.prompt([
    {

        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "


    }
])

const words =  asnwers.Sentence.trim().split(" ")

// print the array of words  to the console

console.log(words);

// print the words count of the sentence to the console

console.log(`Your sentence word count is ${words.length}`);