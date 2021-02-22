var start;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;

// password character variables

var upperCaseCodes = arrayFromLowToHigh(65, 90)
var lowerCaseCodes = arrayFromLowToHigh(97, 122)
var numberCodes = arrayFromLowToHigh(48, 57)
var specialCharCodes = arrayFromLowToHigh (33, 47).concat(arrayFromLowToHigh(58,64))

var criteria;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// debugger;
// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});

// start program
// clicking the generate password button
function generatePassword() {
  // prompt user to enter length of password
  start = parseInt(prompt("How many characters will the password contain? Choose between 8 and 128"));
  //the user will input a number that should be between 8 and 128 
  if (!start) {
    // if the user tries to continue w/o an input
    alert("Please enter a value");
    return;
  } else if (start < 8 || start >128) {
    //*if the input is < 8 or > 128 the user will be alerted 
      start = parseInt(prompt("Password must be bewteen 8 and 128 characters"));
      if (start < 8 || start >128) {
        alert("Invalid Entry! Try Again");
        return;
      }
  } else {
    confirmNumber = confirm("Include numbers in this password?");
    confirmSpecial = confirm("Include special characters in this password?");
    confirmLower = confirm("Include Lowercase characters in this password?");
    confirmUpper = confirm("Include Uppercase characters in this password?");
  };
  //if none of the criteria is choosen the user will get an alert
  if (!confirmNumber && !confirmSpecial && !confirmUpper && !confirmLower) {

    criteria = alert("You must choose at leat one password criteria");
  }
  
  // if the user picks all 4 criteria
  else if (confirmNumber && confirmSpecial && confirmUpper && confirmLower) {
    criteria = lowerCaseCodes.concat(upperCaseCodes, specialCharCodes, numberCodes);
  }
  // if the user picks 3 criteria
  else if (confirmNumber && confirmSpecial && confirmUpper) {
    criteria = upperCaseCodes.concat(numberCodes, specialCharCodes);
  }

  else if (confirmNumber && confirmSpecial && confirmLower) {
    criteria = numberCodes.concat(specialCharCodes, lowerCaseCodes);
  }

  else if (confirmNumber && confirmUpper && confirmLower) {
    criteria = numberCodes.concat(upperCaseCodes, lowerCaseCodes);
  }

  else if (confirmSpecial && confirmUpper && confirmLower) {
    criteria = specialCharCodes.concat(upperCaseCodes, lowerCaseCodes);
  }

  // if the user picks 2 criteria
  else if (confirmNumber && confirmSpecial) {
    criteria = numberCodes.concat(specialCharCodes);
  }
  else if (confirmUpper && confirmLower) {
    criteria = upperCaseCodes.concat(lowerCaseCodes);
  }
  else if (confirmSpecial && confirmUpper) {
    criteria = specialCharCodes.concat(upperCaseCodes);
  }
  else if (confirmSpecial && confirmLower) {
    criteria = specialCharCodes.concat(lowerCaseCodes);
  }
  else if (confirmNumber && confirmLower) {
    criteria = numberCodes.concat(lowerCaseCodes);
  }
  else if (confirmNumber && confirmUpper) {
    criteria = numberCodes.concat(upperCaseCodes);
  }

  // if the user picks 1 criteria
  else if (confirmUpper) {
    criteria = upperCaseCodes;
  }
  else if (confirmLower) {
    criteria = lowerCaseCodes;
  }
  else if (confirmNumber) {
    criteria = numberCodes;
  }
  else if (confirmSpecial) {
    criteria = specialCharCodes;
  };

  let textCodes = lowerCaseCodes

  if (confirmUpper) textCodes = textCodes.concat(upperCaseCodes)
  if (confirmNumber) textCodes = textCodes.concat(numberCodes)
  if (confirmSpecial) textCodes = textCodes.concat(specialCharCodes)
  
  var password = []; 

  for (var i = 0; i < start; i++) {
    var selectedcriteria = criteria[Math.floor(Math.random() * criteria.length)];
    password.push(String.fromCharCode(selectedcriteria));
  }
    
  var pw = password.join("");
  passwordInput(pw);
  return pw;

}

function passwordInput(pw) {
  document.getElementById("password").textContent = pw;
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
