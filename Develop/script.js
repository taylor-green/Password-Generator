// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define all characters
var chars1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var chars2 = 'abcdefghijklmnopqrstuvwxyz';
var chasrs3 = '!@#$%^&*()_+<->:;{}';
var chars4 = '0123456789';

var charset ='';
var password ='';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password logic
var generatePassword = function() {
var passLength = 0;  
}

// set password length criteria 
passLength = prompt ('Select a password length: Min 8, Max 128.');

if  (passLength >= 8 || passLength <= 128) {
  console.log(passLength);
} else {
  alert('Be sure your submission is between 8 and 128 characters.')
  return'';
}
