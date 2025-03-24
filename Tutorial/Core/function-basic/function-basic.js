function min(a, b) {
  if (a > b)
    return b;
  return a;
}

function pow(x, n){
  let powNum = x;
  for (let i = 0; i !== n; i ++) {
    powNum *= x;
  }
  return powNum;
}