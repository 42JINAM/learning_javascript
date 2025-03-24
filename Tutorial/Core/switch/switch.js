// switch (browser) {
//   case 'Edge':
//     alert( "Edge를 사용하고 계시네요!" );
//     break;
//
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
//     break;
//
//   default:
//     alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
// }

let browser = prompt("what is your browser?");

let message;
if (browser === 'Edge')
  message = "You are using EDGE";
else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  message = "You are using a supported browser";
} else {
  message = "You use a undefined browser";
}

message += ". I hope this current page is functioning properly.";
alert(message);