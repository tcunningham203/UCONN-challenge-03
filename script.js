//I learned how to create and retrieve data from a Prompt Dialog Box from this website http://www.learningaboutelectronics.com/Articles/How-to-create-and-retrieve-data-from-a-prompt-dialog-box-with-Javascript.php

//I learned how to make randomly generated passwords from this website using Math.random() : https://dev.to/code_mystery/random-password-generator-using-javascript-6a

var charsLower = "qwertyuiopasdfghjklzxcvbnm"
var charsUpper = "QWERTYUIOPASDFGHJKLZXCVBNM"
var charsNumeric = "0123456789"
var charsSpecial = "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var charsLowerUpper = ""
var charsLowerNumeric = ""
var charsLowerSpecial = ""
var charsUpperNumeric = ""
var charsUpperSpecial = ""
var charsNumericSpecial = ""
var charsLowerUpperNumeric = ""
var charsLowerUpperSpecial = ""
var charsLowerNumericSpecial = ""
var charsUpperNumericSpecial = ""
var charsLowerUpperNumericSpecial = ""


function allPromptQuestions() {
var passwordLength = prompt("How many characters would you like your password to be? Please input a number of at least 8 but no more than 128.")
if (passwordLength >= 8 && passwordLength <= 128){
  var promptLower = confirm("Would you like to have lowercase characters in your password? Press OK for yes. Press Cancel for no.");
  if (promptLower == true) {
  for (var i = 0; i <= passwordLength; i++) 
  // var rng = Math.floor(Math.random() * charsLower.length);
  password.value += charsLower[Math.floor(Math.random() * charsLower.length)]
  console.log(password)
  return password.value
  }
   else{
    alert("You must answer Y to at least one of the four prompts about character types to continue. Please start again.")
    return ("Refresh and try again...")
   }
}else {
alert("You must input a number of at least 8 but no more than 128 to continue.")
return ("Refresh and try again...")
}


}








// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = allPromptQuestions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var answer = window.prompt("Enter ");
// if (answer) {
//     //some code
// }
// else {
//     //some code
// }

// document.querySelector('#generate').addEventListener('click' userAdjective); {
// }
// {
//   function userAdjective = prompt("Please provide an Adjective");
//   alert (userAdjective);
// }

