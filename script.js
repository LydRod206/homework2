//Series of prompts
//ask to enter a password
var askEnter = prompt("would you like a random password?");
//ask how many characters in password
var askLength = prompt("how many characters would you like in the password?, 8>28");
//ask if they want lowercase characters
var askLower = prompt("would you like lowercase characters included?");
//ask if they want uppercase characters
var askUpper = prompt("would you like uppercase characters included?");
//ask if they want numbers
var askNum = prompt("would you like numbers included?");
//ask if they want special characters
var askSpecial = prompt("would you like special characters included?");

//confirm function
function getCriteria(){
  var criteria = {};
  criteria.length = parseInt(prompt(askLength));
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
  var lower = "abcdefghijklmnopqrtsuvsxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "1234567890";
  var special = "!@#$%^&*()_+{}:<>?";
  var criteria = getCriteria();

  if (criteria.lower) {
    characters += lower;
  }
  if (criteria.upper) {
    characters += upper;
  }
  if (criteria.num) {
    characters += num;
  }
  if (criteria.special) {
    characters += special;
  }
  
  var counter = 0;
  for ( var i = 0; i < criteria.length; i++){
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
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
