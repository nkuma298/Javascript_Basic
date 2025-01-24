const prompt = require("prompt-sync")({sigint:true});
let age = prompt("whats your age: ")
age = Number.parseInt(age)
if (age%2==0 && age%3==0){
  console.log("your age is divisible by 2 and 3")
}
else {
  console.log("your age is not divisible by 2 and 3")
}