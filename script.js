// Assignment Code
var generateBtn = document.querySelector("#generate");

let populateArray = function(start, end) {
    let numberArray = [];
    for (let i = start; i <= end; i++) {
        numberArray.push(i);
    }
    return numberArray;
}

let symbolAsciiArray1 = populateArray(33,47);
let symbolAsciiArray2 = populateArray(58,64);
let symbolAsciiArray3 = populateArray(91,96);
let lowercaseAsciiArray = populateArray(97, 122);
let uppercaseAsciiArray = populateArray(65, 90); 
let numberAsciiArray = populateArray(48, 57);
let symbolAsciiArrayTotal = symbolAsciiArray1.concat(symbolAsciiArray2,symbolAsciiArray3);

let passwordGeneratorArray = [];


let generatePassword = function () {
    let uppercaseSelect = "No";
    let lowercaseSelect = "No";
    let numberSelect = "No";
    let symbolSelect = "No";
    
    let password = [];

    let passwordLength = prompt("Enter How Many Characters the Password needs to be: (Between 8 - 128)");
   
    if (!passwordLength) {
        alert("Error. Value entered is invalid")
        return 0;
    }
    
    if (isNaN(passwordLength)) {
        alert("Error. Value must be a number!")
        return 0;
    }

    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Error. Enter a number in range!")
        return 0;
    } 

    if (confirm("Do you want uppercase letters?")) {
        uppercaseSelect = "Yes";
        for (let i = 0; i < uppercaseAsciiArray.length; i++) {
            passwordGeneratorArray.push(uppercaseAsciiArray[i]);
        }
    }

    if (confirm("Do you want lowercase letters?")) {
        lowercaseSelect = "Yes";
        for (let i = 0; i < lowercaseAsciiArray.length; i++) {
            passwordGeneratorArray.push(lowercaseAsciiArray[i]);
        }
    }

    if (confirm("Do you want numbers in your password?")) {
        numberSelect = "Yes";
        for (let i = 0; i < numberAsciiArray.length; i++) {
            passwordGeneratorArray.push(numberAsciiArray[i]);
        }
    }
    if (confirm("Do you want symbols in your password?")) {
        symbolSelect = "Yes";
        for (let i = 0; i < symbolAsciiArrayTotal.length; i++) {
            passwordGeneratorArray.push(symbolAsciiArrayTotal[i]);
        }
    }

    if (uppercaseSelect === "No" && lowercaseSelect === "No" && numberSelect === "No" && symbolSelect === "No") {
        alert("You must select at least one of the conditionals");
        return 0;
    }

    if (!confirm(" You have chosen Uppercase: "+uppercaseSelect+". Lowercase: "+lowercaseSelect+". Numbers: "+numberSelect+". Symbols: "+symbolSelect+". Press okay to continue or cancel to start again")) {
        return 0;
    }

    for (let i = 0; i <= passwordLength; i++) {
        let character = passwordGeneratorArray[Math.floor(Math.random() * passwordGeneratorArray.length)];
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

