"use strict";

// let message;
//
// if (login == '직원') {
//   message = '안녕하세요.';
// } else if (login == '임원') {
//   message = '환영합니다.';
// } else if (login == '') {
//   message = '로그인이 필요합니다.';
// } else {
//   message = '';
// }

let login = prompt("who are you?");
let message = (login === 'employee') ? 'Hi?'
    : (login === 'excutive') ? 'welcome' : 'You need to log in';
alert(message);