// Assignment code here
function generatePassword() {

var letters = "abcdefghijklmnopqrstuvwxyz";
var LETTERS = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
var numbers = "1234567890";
var characters = "!.@.#,&,(,),<,>,%";


// password length
  var passwordLength = window.prompt("How long would you like your password to be? Pick a number between 8 - 128");

var x = parseInt('8');
var y = parseInt('128');

if (passwordLength < x || passwordLength > y) {
  window.alert("Oops, please pick a number between 8 and 128!")
} else { (passwordLength > x || passwordLength <y)
  window.alert('Good Job!')
}

// special characters
var characterPrompt = window.confirm("Would you like to include special characters?");

if (characterPrompt) {
  userSelections = userSelections + characters
}

if (userSelections === "") {
  window.alert("You must include one set of criteria. Please Try again.")
  return
}


// lowercase letters
  //semicolon at end or no?
var lowercasePrompt = window.confirm("Would you like to include lowercase letters?");

if (lowercasePrompt) {
  userSelections = userSelections + letters

}

// uppercase letters
  //semicolon at end or no?
var uppercasePrompt = window.confirm("Would you like to include uppercase letters?");
if (uppercasePrompt) {
  userSelcetions = userSelections + LETTERS
}


generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

} // end function

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
  var password = generatePassword()
  var passwordDisplay = document.querySelector("#password")
  passwordDisplay.textContent = password
