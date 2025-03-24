"use strict";

let userName = prompt();
let ADMIN_NAME = 'Admin';
let ADMIN_PASSWORD = 'TheMaster';
let message;

if (userName === ADMIN_NAME) {
  let password = prompt("password?");
  if (!password) {
    message = 'Canceled';
  } else if (password === ADMIN_PASSWORD)
    message = 'Welcome!';
  else {
    message = 'Wrong password';
  }
} else if (!userName) {
  message = 'Canceled';
} else {
  message = "I don't know you";
}
alert(message);