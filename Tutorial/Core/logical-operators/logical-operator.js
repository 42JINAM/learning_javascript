"use strict";

let age = prompt("age?");
let message = "Your age is not between 14 and 90 years old";
if (age >= 14 && age <= 90)
  message = "Your age is between 14 and 90 years old";

if (!(age >= 14 && age <= 90))
  message = "gotcha1!"

if (age < 14 || age > 90)
  message = "gotcha2!"
alert(message);