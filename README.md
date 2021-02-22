# 03 JavaScript: Password Generator

<hi>Pseudocode/Planning</hi>

<!-- // start program
clicking the generate password button
  calls passwordLength = prompts "How many characters will the password contain? Choose between 8 and 128".
   the user will input a number that should be between 8 and 128 
    *if the input is < 8 or > 128 the user will be alerted  "Password must be bewteen 8 and 128 characters"
      break;
    *if nothing is input the user will be alrerted "Please enter a value"
      call passwordLength prompt again;
    *if the input is between 8 - 128 move on to comfirmNumbers
  confirmNumber = confirm "Will numbers will be included in this password"
    *the user will choose true or false (okay or cancel)
      .
      move on to confirmSpecial
  confirmSpecial = confirm "Will special characters will be included in this password"
    *the user will choose true or false (okay or cancel)
    .
    move on to confirmLower
  confirmLower = confirm "Will lowercase letters will be included in this password"
    *the user will choose true or false (okay or cancel)
    .
    move on to confirmUpper
  confirmUpper = confirm "Will uppercase letters will be included in this password"
  *the user will choose true or false (okay or cancel)
  .
  call generatePassword
    once all the prompts have been answered the password will generate what matches the selected criteria
      *at least one true choice must be made
        *if all are false alert user "You must choose at leat one password criteria"
          * call confirmNumber again;
    add upp the values of the true choices and randomly select characters based on passwordLength 
  the generated passwprd will be displayed in the <textarea>
}*/ -->

![screenshot1](https://github.com/kingkevin05/wk-3-challenge/blob/main/assets/images/Screenshot1.png)

![screenshot2](https://github.com/kingkevin05/wk-3-challenge/blob/main/assets/images/Screenshot2.png)

![screenshot3](https://github.com/kingkevin05/wk-3-challenge/blob/main/assets/images/Screenshot3.png)
