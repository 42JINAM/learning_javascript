let userInput = prompt("number");

for (let i = 2; i <= userInput; i++) {
  let isPrime = true;
  for (let j = 2; j <= i / 2; j++) {

    if (i % j === 0) {
      isPrime = false;
    }
  }
  alert(`${i}, prime: ${isPrime}`);
}