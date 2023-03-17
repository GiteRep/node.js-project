const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const pi = 3.141592653589793

var hi = "Hello World"
var number = 123456

var calcSQRT = function(num) {
  return Math.sqrt(num);
};

var calcCBRT = function(num) {
  return Math.cbrt(num);
};

var calcMe = function(num) {
  return Math.cbrt(num) *
2 + 2 * (Math.sqrt(num) + 4);
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.listen(3000, () => {
  console.log('server started');
});

/*console.log('Running at Port 8889 🖥');
console.log("Running at localhost:8889 💻")
console.log("number = " + number)
console.log("pi 🍰 = " + pi)
console.log("The square root of number is " + calcSQRT(number))
console.log("The square root of 153 is " + calcSQRT(153))
console.log("The cube root of number is " + calcCBRT(number))
console.log("The cube root of 153 is " + calcCBRT(153))
console.log("The mystery function outputs " + calcMe(number) + " after being passed number")*/
