
function generatePassword() {
  // assigning variables
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var LETTERS = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
  var numbers = "1234567890";
  var characters = "!.@.#,&,(,),<,>,%";


  var passwordLength = window.prompt('How long would you like your password to be?');
  passwordLength = Number.parseInt(passwordLength, 10)

  var minPasswordlength = 8;
  var maxPasswordlength = 128;


  // Get references to the #generate element

  var userSelections = ""

  // lowercase letters

  var lowercasePrompt = window.confirm("Would you like to include lowercase letters?")

  if (lowercasePrompt) {
    userSelections = userSelections + letters

  }

  // uppercase letters

  var uppercasePrompt = window.confirm("Would you like to include uppercase letters?");

  if (uppercasePrompt) {
    userSelections = userSelections + LETTERS
  }

  // numbers

  var numbersPrompt = window.confirm("Would you like to include numbers?");

  if (numbersPrompt) {
    userSelections = userSelections + numbers

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

  //setting the password length

  var password = ""

  if (!Number.isNaN(passwordLength) && passwordLength >= minPasswordlength && passwordLength <= maxPasswordlength) {

    while (password.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * userSelections.length);

      var randomCharacter = userSelections.charAt(randomIndex);
      password = password + randomCharacter
    }
  }
  else {
    window.alert("Please try again")
  }

  return password

}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  var password = generatePassword()
  var passwordDisplay = document.querySelector("#password")
  passwordDisplay.textContent = password
})