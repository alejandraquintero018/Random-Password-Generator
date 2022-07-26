// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  };
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  //Where I am storing all of the possible characters that the could want in their password.
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "?", "<", ">", "~", "`", ":", ";"];
  
  //function to generate the random password
  function randomPassword(arr) {
    var random = Math.floor(Math.random()*arr.length);
    return arr[random];
  };
  function generatePassword(){
  //Where I am confirming with the user what kind of characters that they want from each array, 
  //they will each return a boolean that I will use in my logic function 
  var wantsUppercase = confirm("Do you want Uppercase Letters in your password?");
  var wantsLowercase = confirm("Do you want lowercase letters in your password?");
  var wantsSpecialCharacters = confirm("Do you want special characters in your password?"); 
  var wantsNumbers = confirm("Do you want numbers in your password?");
  
  //prompting the user to chose a criteria if they say no to every criteria asked for in the password
  if(!wantsLowercase && !wantsLowercase && !wantsSpecialCharacters && !wantsNumbers) {
    window.prompt("You must choose a criteria for your password");
  };
  
  //Where I am asking the length of the password that the professor wants 
  var PasswordLength = parseInt(prompt("How long do you want your password to be?"));
  
  console.log(typeof PasswordLength);
  
  //Array to hold my final password 
  var GeneratedPassword = []; 
  
  var UserSelectedChar = [];
  //logic to generate the password, this is also taking the input from the user as far as what is going to make up the password.
  if(wantsUppercase) {
   var randomUppercase = randomPassword(uppercase);
   GeneratedPassword.push(randomUppercase);
   UserSelectedChar = UserSelectedChar.concat(uppercase);
  }
  if (wantsLowercase) { 
    var randomlowercase = randomPassword(lowercase);
    GeneratedPassword.push(randomlowercase);
    UserSelectedChar = UserSelectedChar.concat(lowercase);
  }
  if (wantsSpecialCharacters) {
    var randomSpecialCharacters = randomPassword(specialCharacters);
    GeneratedPassword.push(randomSpecialCharacters);
    UserSelectedChar = UserSelectedChar.concat(specialCharacters);
  }
  if (wantsNumbers) {
    var randomNumbers = randomPassword(numbers);
    GeneratedPassword.push(randomNumbers);
    UserSelectedChar = UserSelectedChar.concat(numbers);
  };
  
  var remaining = PasswordLength - GeneratedPassword.length;
  
  //for loop which runs until the password is generated
  for(var i= 0; i < remaining; i++) {
    GeneratedPassword.push(randomPassword(UserSelectedChar));
  }
  return GeneratedPassword.join("");
  }
  
  generateBtn.addEventListener("click", writePassword);