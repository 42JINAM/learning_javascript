"use strict";

let userNumber = prompt("insert a number");

let answer = Number(userNumber);
if (answer > 0)
  answer = 1;
else if (answer < 0)
  answer = -1;
else
  answer = 0;
alert(answer);

