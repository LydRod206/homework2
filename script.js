//Series of prompts
//ask to enter a password
var askEnter = prompt("would you like a random password?");
//ask how many characters in password
var askLength = prompt("how many characters would you like in the password?, 8>28");
//ask if they want lowercase characters
var askLower = prompt("would you like lowercase characters included?");
//ask if they want uppercase characters
var askUpper = prompt("would you like uppercase characters included?");
//ask if they want special characters
var askSpecial = prompt("would you like special characters included?");


function generatePassword(){
  if (!askEnter) {
      alert("please enter");
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
