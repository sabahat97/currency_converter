#! /usr/bin/env node
import inquirer from "inquirer";
const exchang_Rate = {
    USD: 1,
    KRW: 1351.44,
    QAR: 3.64,
    GBP: 1.26,
    CNY: 7.23,
    THB: 36.57,
    PKR: 278.00
};
let user_Currency_Exchange = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "enter from currency",
        choices: ["USD", "KRW", "QAR", "GBP", "CNY", "THB", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "enter to currency",
        choices: ["USD", "KRW", "QAR", "GBP", "CNY", "THB", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = exchang_Rate[user_Currency_Exchange.from];
let toAmount = exchang_Rate[user_Currency_Exchange.to];
let amount = user_Currency_Exchange.amount;
let baseAmount = amount / fromAmount;
let covertedAmount = baseAmount * toAmount;
console.log(covertedAmount);
