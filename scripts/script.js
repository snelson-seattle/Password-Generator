// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  // Arrays containing valid password characters
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "[", "]", "?", "/", "_", "'", "<", ">"];
  const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const charsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Password length boundaries
  const minLength = 8;
  const maxLength = 128;

  // This loop will keep prompting the user to enter a password length until they enter a number between 8 and 128
  var passLength = 0;
  while(isNaN(passLength) || passLength < minLength || passLength > maxLength){
    passLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128)")); 
  };

  // Prompt the user for valid password characters
  var containsUpper = confirm("Do you want to include upper case letters?");
  var containsNumbers = confirm("Do you want to include numbers?"); 
  var containsSpecial = confirm("Do you want to include special characters?");

  // Variable to store password and array to store valid password characters based on user input
  var password = ""; 
  var allowedChars = [];
  

  // Add an uppercase letter to the password at random if uppercase letters are chosen to be included
  if(containsUpper){
    let x = Math.floor(Math.random() * charsUpper.length);
    password = password + charsUpper[x];
    allowedChars = chars.concat(charsUpper);    
  }else{
    let x = Math.floor(Math.random() * chars.length);
    password = password + chars[x];
    allowedChars = allowedChars.concat(chars);      
  }

  // Add a number to the password at random if numbers are to be included
  if(containsNumbers){
    let x = Math.floor(Math.random() * numbers.length);
    password = password + numbers[x];
    allowedChars = allowedChars.concat(numbers);    
  }

  // Add a special character to the password if special characters are to be included
  if(containsSpecial){
    let x = Math.floor(Math.random() * specialChars.length);
    password = password + specialChars[x];
    allowedChars = allowedChars.concat(specialChars);       
  }


  // Fill out the remaining password characters
  var j = 0;
  for(let i = password.length - 1; i < passLength - 1; i++){  
    j = Math.floor(Math.random() * allowedChars.length);      
    password = password + allowedChars[j];
  }  
 
  // Jumble the password so it won't necessarily start with the uppercase letter, number, or special character 
  // that were generated in my initial if statements
  // This function was found at stackoverflow.com as answered by Joel Mellon in the thread:
  // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);