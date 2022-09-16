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

    let uppercaseSelect = "No";
    let lowercaseSelect = "No";
    let numberSelect = "No";
    let symbolSelect = "No";

    let password = [];

    passwordLength = parseInt(passwordLength);

    if (!passwordLength) {
        alert("Enter a +alid number")
        return 0;
    }

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Enter a !alid number")
        return 0;
    } 

    if (isNaN(passwordLength)) {
        alert("Enter a Walid number")
        return 0;
    }

    if (confirm("Do you want uppercase letters?")) {
        uppercaseSelect = "Yes";
        for (let i = 0; i < uppercaseAscii.length; i++) {
            passwordGenArray.push(uppercaseAscii[i]);
        }
    }

    if (confirm("Do you want lowercase letters?")) {
        lowercaseSelect = "Yes";
        for (let i = 0; i < lowercaseAscii.length; i++) {
            passwordGenArray.push(lowercaseAscii[i]);
        }
    }

    if (confirm("Do you want numbers in your password?")) {
        numberSelect = "Yes";
        for (let i = 0; i < numberAscii.length; i++) {
            passwordGenArray.push(numberAscii[i]);
        }
    }
    if (confirm("Do you want symbols in your password?")) {
        symbolSelect = "Yes";
        for (let i = 0; i < symbolAsciiTotal.length; i++) {
            passwordGenArray.push(symbolAsciiTotal[i]);
        }
    }

    if (uppercaseSelect === "No" && lowercaseSelect === "No" && numberSelect === "No" && symbolSelect === "No") {
        alert("You must select at least one of the conditionals");
        return 0;
    }

    if (!confirm(" You have chosen Uppercase: "+uppercaseSelect+". Lowercase: "+lowercaseSelect+". Numbers: "+numberSelect+". Symbols: "+symbolSelect+". Press okay to continue or cancel to start again")) {
        return 0;
    }

    for (let i = 0; i < passwordLength; i++) {
        let character = passwordGenArray[Math.floor(Math.random() * passwordGenArray.length)];
        password.push(String.fromCharCode(character));
    }

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

