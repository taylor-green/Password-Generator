// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define all characters
var chars1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var chars2 = 'abcdefghijklmnopqrstuvwxyz';
var chars3 = '0123456789';
var chars4 = '!@#$%^&*()-+';

var charset = '';
var password = '';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
 

// password logic
var generatePassword = function () {
  charset = '';
  password = '';
  passLength = parseInt(prompt('Select a password length: Min 8, Max 128.'));

  if (passLength >= 8 && passLength <= 128) {
    // include uppercase?
    var passTypeUpper = confirm('Include uppercase letters?');
    if (passTypeUpper) {
      charset += chars1
    }

    // include lowercase?
    var passTypeLower = confirm('Include lowercase letters?');
    if (passTypeLower) {
      charset += chars2
    }

    // include numbers?
    var passTypeNum = confirm('Include numbers?');
    if (passTypeNum) {
      charset += chars3
    }

    // include specials?
    var passTypeSpec = confirm('Include specials?');
    if (passTypeSpec) {
      charset += chars4

    
    }

    for (var i = 0; i < passLength; i++) {
      var randomChar = charset[Math.floor(Math.random() * charset.length)];
      // console.log(randomChar)
      password += randomChar;
    }

    return password;

    // var passLength = '';
    // console.log(passLength);
  } else {
    alert('Be sure your submission is between 8 and 128 characters.');


  }

}





