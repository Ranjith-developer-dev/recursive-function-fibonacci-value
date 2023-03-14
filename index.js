const express = require("express");
require("dotenv").config();
const { Router } = require("express");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const app = express();
const port = process.env.PORT ? process.env.PORT : "3000";

app.use(express.json());


function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    } else if (n <= 1) {
        return n;
    } else {
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
    }
}
rl.question("Enter a integer: ", (inputInteger) => {
    const test = fibonacci(inputInteger);
    console.log(test);
    rl.close();
});


app.listen(port, () => {
});
