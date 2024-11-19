"use strict";

const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let [hour, minute] = input[0].split(" ").map(Number);
const cookTime = parseInt(input[1]);

let totalMinutes = hour * 60 + minute + cookTime;

hour = Math.floor(totalMinutes / 60) % 24;
minute = totalMinutes % 60;

console.log(hour, minute);
