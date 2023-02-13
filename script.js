//I learned how to create and retrieve data from a Prompt Dialog Box from this website http://www.learningaboutelectronics.com/Articles/How-to-create-and-retrieve-data-from-a-prompt-dialog-box-with-Javascript.php

//I learned how to make randomly generated passwords from this website using Math.random() : https://dev.to/code_mystery/random-password-generator-using-javascript-6a However, it didnt quite work with this assignment so I tweaked things until it worked correctly.

var charsL = "qwertyuiopasdfghjklzxcvbnm"
var charsU = "QWERTYUIOPASDFGHJKLZXCVBNM"
var charsN = "0123456789"
var charsS = "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var charsLU = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
var charsLN = "qwertyuiopasdfghjklzxcvbnm0123456789"
var charsLS = "qwertyuiopasdfghjklzxcvbnm\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var charsUN = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789"
var charsUS = "QWERTYUIOPASDFGHJKLZXCVBNM\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var charsNS = "0123456789\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var charsLUN =  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789"
var charsLUS = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var charsLNS = "qwertyuiopasdfghjklzxcvbnm0123456789\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var charsUNS = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"
var charsLUNS = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"


function allPromptQuestions() {
var passwordLength = prompt("How many characters would you like your password to be? Please input a number of at least 8 but no more than 128.")
if (passwordLength >= 8 && passwordLength <= 128){
  var promptLower = confirm("Would you like to have lowercase characters in your password? \nPress OK for yes. Press Cancel for no.");
  if (promptLower == true) {
    var promptUpper = confirm("Would you like to have uppercase characters in your password? \nPress OK for yes. Press Cancel for no.");
    if (promptUpper == true) {
      var promptNumeric = confirm("Would you like to have numeric characters in your password? \nPress OK for yes. Press Cancel for no.");
      if (promptNumeric == true) {
        var promptSpecial = confirm("Would you like to have special characters in your password? \nPress OK for yes. Press Cancel for no.");
        if (promptSpecial == true){
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsLUNS[Math.floor(Math.random() * charsLUNS.length)]
        return password.value
        }
        else {
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsLUN[Math.floor(Math.random() * charsLUN.length)]
        return password.value
        }
        
      }
      else {
        var promptSpecial = confirm("Would you like to have special characters in your password? \nPress OK for yes. Press Cancel for no.");
        if (promptSpecial == true){
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsLUS[Math.floor(Math.random() * charsLUS.length)]
        return password.value
        }
        else {
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsLU[Math.floor(Math.random() * charsLU.length)]
        return password.value
        }
        
      }
    }  
    else {
      var promptNumeric = confirm("Would you like to have numeric characters in your password? \nPress OK for yes. Press Cancel for no.");
      if (promptNumeric == true) {
        var promptSpecial = confirm("Would you like to have special characters in your password? \nPress OK for yes. Press Cancel for no.");
        if (promptSpecial == true){
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsLNS[Math.floor(Math.random() * charsLNS.length)]
        return password.value
        }
        else {
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsLN[Math.floor(Math.random() * charsLN.length)]
        return password.value
        }
        
      }
      else {
        var promptSpecial = confirm("Would you like to have special characters in your password? \nPress OK for yes. Press Cancel for no.");
        if (promptSpecial == true){
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsLS[Math.floor(Math.random() * charsLS.length)]
        return password.value
        }
        else {
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsL[Math.floor(Math.random() * charsL.length)]
        return password.value
        } 
      }
    } 
  }  
  else {
    var promptUpper = confirm("Would you like to have uppercase characters in your password? \nPress OK for yes. Press Cancel for no.");
    if (promptUpper == true) {
      var promptNumeric = confirm("Would you like to have numeric characters in your password? \nPress OK for yes. Press Cancel for no.");
      if (promptNumeric == true) {
        var promptSpecial = confirm("Would you like to have special characters in your password? \nPress OK for yes. Press Cancel for no.");
        if (promptSpecial == true){
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsUNS[Math.floor(Math.random() * charsUNS.length)]
        return password.value
        }
        else {
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsUN[Math.floor(Math.random() * charsUN.length)]
        return password.value
        }
        
      }
      else {
        var promptSpecial = confirm("Would you like to have special characters in your password? \nPress OK for yes. Press Cancel for no.");
        if (promptSpecial == true){
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsUS[Math.floor(Math.random() * charsUS.length)]
        return password.value
        }
        else {
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsU[Math.floor(Math.random() * charsU.length)]
        return password.value
        }
        
      }
    }  
    else {
      var promptNumeric = confirm("Would you like to have numeric characters in your password? \nPress OK for yes. Press Cancel for no.");
      if (promptNumeric == true) {
        var promptSpecial = confirm("Would you like to have special characters in your password? \nPress OK for yes. Press Cancel for no.");
        if (promptSpecial == true){
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsNS[Math.floor(Math.random() * charsNS.length)]
        return password.value
        }
        else {
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsN[Math.floor(Math.random() * charsN.length)]
        return password.value
        }
        
      }
      else {
        var promptSpecial = confirm("Would you like to have special characters in your password? \nPress OK for yes. Press Cancel for no.");
        if (promptSpecial == true){
        for (var i = 0; i <= passwordLength; i++) 
        password.value += charsS[Math.floor(Math.random() * charsS.length)]
        return password.value
        }
        else{
          alert("You must answer \"OK\" to at least one of the four prompts about character types to continue. Please start again.")
          return ("Try again. Choose at least 1 character type.")
         }
      }
    }   
  }
}
else {
alert("You must input a number of at least 8 but no more than 128 to continue.")
return ("Try again. Input a number within the specified range.")
}
}

// Route 1-15 Code
// for (var i = 0; i <= passwordLength; i++) 
// password.value += charsLower[Math.floor(Math.random() * charsLower.length)]
// return password.value
// }


// Route 16 code
// else{
//   alert("You must answer Y to at least one of the four prompts about character types to continue. Please start again.")
//   return ("Refresh and try again...")
//  }




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


