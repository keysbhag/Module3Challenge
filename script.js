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

let randomIndexSelector = function (passwordGeneratorArr,passwordLen,password, preSelection) {
    for (let i = 0; i < (passwordLen - preSelection); i++) {
        let character = passwordGeneratorArr[Math.floor(Math.random() * passwordGeneratorArr.length)];
        password.push(String.fromCharCode(character));
    }
    return password;
}

let generatePassword = function () {
    let uppercaseSelect = "No";
    let lowercaseSelect = "No";
    let numberSelect = "No";
    let symbolSelect = "No";

    let password = [];

    let selectionCount = 0;
    
    let passwordLength = prompt("Enter How Many Characters the Password needs to be: (Between 8 - 128)");
   
    if (!passwordLength) {
        alert("Error. Value entered is invalid")
        return;
    }
    
    if (isNaN(passwordLength)) {
        alert("Error. Value must be a number!")
        return;
    }

    if (passwordLength % 1 != 0) {
        alert("Error. Value is a float. Must be an int!");
        return;
    }

    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Error. Enter a number in range!")
        return;
    }
    
    if (confirm("Do you want uppercase letters?")) {
        uppercaseSelect = "Yes";
        selectionCount++;
        let singleChar = uppercaseAsciiArray[Math.floor(Math.random() * uppercaseAsciiArray.length)];
        password.push(String.fromCharCode(singleChar));
        passwordGeneratorArray = passwordGeneratorArray.concat(uppercaseAsciiArray);
    }

    if (confirm("Do you want lowercase letters?")) {
        lowercaseSelect = "Yes";
        selectionCount++;
        let singleChar = lowercaseAsciiArray[Math.floor(Math.random() * lowercaseAsciiArray.length)];
        password.push(String.fromCharCode(singleChar));
        passwordGeneratorArray = passwordGeneratorArray.concat(lowercaseAsciiArray);
    }

    if (confirm("Do you want numbers in your password?")) {
        numberSelect = "Yes";
        selectionCount++;
        let singleChar = numberAsciiArray[Math.floor(Math.random() * numberAsciiArray.length)];
        password.push(String.fromCharCode(singleChar));
        passwordGeneratorArray = passwordGeneratorArray.concat(numberAsciiArray);
    }

    if (confirm("Do you want symbols in your password?")) {
        symbolSelect = "Yes";
        selectionCount++;
        let singleChar = symbolAsciiArrayTotal[Math.floor(Math.random() * symbolAsciiArrayTotal.length)];
        password.push(String.fromCharCode(singleChar));
        passwordGeneratorArray = passwordGeneratorArray.concat(symbolAsciiArrayTotal);
    }

    if (uppercaseSelect === "No" && lowercaseSelect === "No" && numberSelect === "No" && symbolSelect === "No") {
        alert("You must select at least one of the conditionals");
        return;
    }

    if (!confirm(" You have chosen Uppercase: "+uppercaseSelect+". Lowercase: "+lowercaseSelect+". Numbers: "+numberSelect+". Symbols: "+symbolSelect+". Press okay to continue or cancel to start again")) {
        return;
    }

    password = randomIndexSelector(passwordGeneratorArray,passwordLength,password, selectionCount);

    password.sort(function(){return 0.5 - Math.random()});

    console.log(password);

    password = password.join('')
    
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

