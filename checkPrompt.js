const prompt = require("prompt-sync")({sigint:true});
let a = prompt("Enter the age: ");
console.log(typeof a);
a = Number.parseInt(a);
console.log(typeof a);
if (a < 0) {
  alert("Invalid age");
} else if (a < 9) {
  alert("You are a kid");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18");
} else {
  alert("You can drive");
}

console.log("you can", a<18? "notdrive" :'drive')