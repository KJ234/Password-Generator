// Assignment Code
var generateBtn = document.querySelector("#generate");

var UpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var LowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Numeric = ["0","1","2","3","4","5","6","7","8","9"]
var SpecialCharacters = ["#","!","@","<>","£","%","*","/","%"]
var password = []

function generatePassword() {
  var length = (prompt("Between 8 and 128 characters, how long would you like your password to be?"));
if (length <8 || length >128) {
 alert("Your password must be between 8 and 128 characters");
 var length = (prompt("Between 8 and 128 characters, how long would you like your password to be?"));
 if (length === false) {
   alert("Please choose a Number between 8 and 128");
 }
}

 var SpecialCharacter = confirm("Do you want your password to have special characters?");
 if (SpecialCharacters) {
   password = password.concat(SpecialCharacters)
 }
 var NumericCharacter = confirm("Do you want your password to have Numeric characters?");
 if (Numeric) {
  password = password.concat(Numeric)
}
 var UpperCaseCharacter = confirm("Do you want your password to have Upper case characters?");
 if (UpperCase) {
  password = password.concat(UpperCase)
}
 var LowerCaseCharacter = confirm("Do you want your password to have lower case characters?");
 if (LowerCase) {
  password = password.concat(LowerCase)
}
 while (!SpecialCharacter && !NumericCharacter && !UpperCaseCharacter && !LowerCaseCharacter) {
   alert("One of the previous must be chosen!")
 SpecialCharacter = confirm("Do you want your password to have special characters?");
 Numeric = confirm("Do you want your password to have Numeric characters?");
 UpperCase = confirm("Do you want your password to have Upper case characters?");
 LowerCaseCharacter = confirm("Do you want your password to have lower case characters?");
}

var randomPassword = ""
      
for (var i = 0; i < length; i++) {
  randomPassword = randomPassword + password[Math.floor(Math.random() * password.length)];
  console.log(randomPassword)
}
return randomPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
