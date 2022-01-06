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

 var SpecialCharacters = confirm("Do you want your password to have special characters?");
 var Numeric = confirm("Do you want your password to have Numeric characters?");
 var UpperCase = confirm("Do you want your password to have Upper case characters?");
 var LowerCase = confirm("Do you want your password to have lower case characters?");
 while (SpecialCharacters, Numeric, UpperCase, LowerCase === false) {
   alert("One of the previous must be chosen!")
 SpecialCharacters = confirm("Do you want your password to have special characters?");
 Numeric = confirm("Do you want your password to have Numeric characters?");
 UpperCase = confirm("Do you want your password to have Upper case characters?");
 LowerCase = confirm("Do you want your password to have lower case characters?");
}
}












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
