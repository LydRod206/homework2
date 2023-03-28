//Series of prompts
//ask to enter a password
var askEnter;
//ask how many characters in password
var askLength;
//ask if they want lowercase characters
var askLower;
//ask if they want uppercase characters
var askUpper;
//ask if they want special characters
var askSpecial;


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
