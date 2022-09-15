// Assignment Code
var generateBtn = document.querySelector("#generate");

let populateArray = function(start, end) {
    let numberArray = [];
    for (let i = start; i <= end; i++) {
        numberArray.push(i);
    }
    return numberArray;
}

let symbolAscii1 = populateArray(33,47);
let symbolAscii2 = populateArray(58,64);
let symbolAscii3 = populateArray(91,96);
let lowercaseAscii = populateArray(97, 122);
let uppercaseAscii = populateArray(65, 90); 
let numberAscii = populateArray(48, 57);

let symbolAsciiTotal = symbolAscii1.concat(symbolAscii2,symbolAscii3);

let passwordGenArray = [];



let generatePassword = function () {
    let passwordLength = prompt("How many characters does the password need to be?");

    if (passwordLength < "8" && passwordLength > "128") {
        alert("Enter a valid number")
        return 0;
    } 

    if (!passwordLength) {
        alert("Enter a valid number")
        return 0;
    }

    if (isNaN(passwordLength)) {
        alert("Enter a Valid number")
        return 0;
    }

    let uppercaseSelect = prompt("Do you want uppercase characters? Y/N");

    let lowercaseSelect = prompt("Do you want lowercase characters? Y/N");

    let numericSelect = prompt("Do you want numbers in your password? Y/N");

    let symbolSelect = prompt("Do you want any special symbols in your password? Y/N");

    uppercaseSelect = uppercaseSelect.toUpperCase();

    lowercaseSelect = lowercaseSelect.toUpperCase();

    numericSelect = numericSelect.toUpperCase();

    symbolSelect = symbolSelect.toUpperCase();

    if (!confirm(" You have chosen Uppercase: "+uppercaseSelect+" Lowercase: "+lowercaseSelect+" Numbers: "+numericSelect+" Symbols: "+symbolSelect+". Press okay to continue or cancel to start again")) {
        return 0;
    }

    if (uppercaseSelect === "Y") {
        for (let i = 0; i < uppercaseAscii.length; i++) {
            passwordGenArray.push(uppercaseAscii[i]);
        }
    }

    if (lowercaseSelect === "Y") {
        for (let i = 0; i < lowercaseAscii.length; i++) {
            passwordGenArray.push(lowercaseAscii[i]);
        }
    }

    if (numericSelect === "Y") {
        for (let i = 0; i < numberAscii.length; i++) {
            passwordGenArray.push(numberAscii[i]);
        }
    }
    if (symbolSelect === "Y") {
        for (let i = 0; i < symbolAsciiTotal.length; i++) {
            passwordGenArray.push(symbolAsciiTotal[i]);
        }
    }
    let password = [];

    for (let i = 0; i < passwordLength; i++) {
        let character = passwordGenArray[Math.floor(Math.random() * passwordGenArray.length)];
        password.push(String.fromCharCode(character));
    }

    console.log(password);
    return password.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
