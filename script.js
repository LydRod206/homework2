//Series of prompts
//ask to enter a password
var askEnter = "would you like a random password?";
//ask how many characters in password
var askLength = "how many characters would you like in the password?, 8>28";
//ask if they want lowercase characters
var askLower = "would you like lowercase characters included?";
//ask if they want uppercase characters
var askUpper = "would you like uppercase characters included?";
//ask if they want numbers
var askNum = "would you like numbers included?"
//ask if they want special characters
var askSpecial = "would you like special characters included?";

//confirm function
function getCriteria(){
  var criteria = {};
  criteria.length = parseInt(prompt(charLength));
  criteria.lower = confirm(askLower);
  criteria.upper = confirm(askUpper);
  criteria.num = confirm(askNum);
  criteria.special = confirm(askSpecial);
  return criteria;
}


//main function
function generatePassword(){
  var password = " ";
  var characters = " ";
  var Lower = "abcdefghijklmnopqrtsuvsxyz";
  var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Num = "1234567890";
  var Special = "!@#$%^&*()_+{}:<>?";
  var criteria = getCriteria();
  
  var counter = 0;
  for ( var i = 0; i < criteria.length; i++){
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
  }
  return password;
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
