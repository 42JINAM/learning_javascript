for (let i = 2; i !== 11; i++){
  if (i % 2 !== 0)
    continue;
  alert(i);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let userInput;

while(1) {
  userInput = prompt('Insert a number(>100)');
  if (!userInput)
    break;
  else if (userInput > 100) {
    alert(`user input : ${userInput}`);
    break;
  }
}
