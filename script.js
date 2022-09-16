// Assignment Code
var generateBtn = document.querySelector("#generate");

// The populateArray function takes the Ascii range passed to it and uses a 
// for loop to iterate through each number and push it to an array called numberArray
let populateArray = function(start, end) {
    let numberArray = [];
    for (let i = start; i <= end; i++) {
        numberArray.push(i);
    }
    return numberArray;
}

// Declares all the arrays that will hold the Ascii values and 
// calls the function populateArray to populate the variable
let symbolAsciiArray1 = populateArray(33,47); 
let symbolAsciiArray2 = populateArray(58,64);
let symbolAsciiArray3 = populateArray(91,96);
let lowercaseAsciiArray = populateArray(97, 122);
let uppercaseAsciiArray = populateArray(65, 90); 
let numberAsciiArray = populateArray(48, 57);
let symbolAsciiArrayTotal = symbolAsciiArray1.concat(symbolAsciiArray2,symbolAsciiArray3); // Since there are different ranges of symbols on Ascii I populated 3 arrays and concatted them together 

// randomCharacterSelector Function takes the passwordGeneratorArray that is populated with the selected character arrays and 
// uses a for loop to push the requested password length of random characters, minus the preselected minimum 
// characters to the password array variable 
let randomCharacterSelector = function (passwordGeneratorArr,passwordLen,password, preSelection) {
    for (let i = 0; i < (passwordLen - preSelection); i++) {
        let character = passwordGeneratorArr[Math.floor(Math.random() * passwordGeneratorArr.length)];
        password.push(String.fromCharCode(character));
    }
    return password;
}

// Main function to generate the password
let generatePassword = function () {
    // Sets all selects to "No" so that they can be called in the final confirmation. They are set to yes if Selected.
    let uppercaseSelect = "No";
    let lowercaseSelect = "No";
    let numberSelect = "No";
    let symbolSelect = "No";
    
    // Declare empty passwordGeneratorArray before every generation to avoid errors
    let passwordGeneratorArray = [];
    
    // Password array gets populated after pulling random values from the passwordGeneratorArray
    let password = [];

    // Sets selection count to 0 every time its called so user can make new selections
    let selectionCount = 0;
    
    // Prompts user for password length
    let passwordLength = prompt("Enter How Many Characters the Password needs to be: (Between 8 - 128)");
   
    // Checks if there is a value within the prompt
    if (!passwordLength) {
        alert("Error. Value entered is invalid")
        return;
    }
    
    // Checks if the value is a number
    if (isNaN(passwordLength)) {
        alert("Error. Value must be a number!")
        return;
    }

    // Checks if value is a decimal
    if (passwordLength % 1 != 0) {
        alert("Error. Value is a float. Must be an int!");
        return;
    }
    // Converts prompt value to a number
    passwordLength = parseInt(passwordLength);
    
    // Checks the range of the password length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Error. Enter a number in range!")
        return;
    }
    
    // Prompts user to choose is they want uppercase letters
    if (confirm("Do you want uppercase letters?")) {
        uppercaseSelect = "Yes"; // Sets value for final confirmation to say yes 
        selectionCount++; // Updates the selection count
        let singleCharU = uppercaseAsciiArray[Math.floor(Math.random() * uppercaseAsciiArray.length)]; // In order to ensure there is atleast one of the selected characters we randomly choose a character  
        password.push(String.fromCharCode(singleCharU));                                               // from the uppercaseAsciiArray and populate it in the password array to later be randomized later 
        passwordGeneratorArray = passwordGeneratorArray.concat(uppercaseAsciiArray); // Concats the uppercase array to the passwordGeneratorArray            
    }
    
    // Prompts user to choose if the want lowercase letters. All rules of the uppercase if statement apply to this block of code
    if (confirm("Do you want lowercase letters?")) {
        lowercaseSelect = "Yes";
        selectionCount++;
        let singleCharL = lowercaseAsciiArray[Math.floor(Math.random() * lowercaseAsciiArray.length)];
        password.push(String.fromCharCode(singleCharL));
        passwordGeneratorArray = passwordGeneratorArray.concat(lowercaseAsciiArray);
    }

    // Prompts user to choose if the want numbers. All rules of the uppercase if statement apply to this block of code
    if (confirm("Do you want numbers in your password?")) {
        numberSelect = "Yes";
        selectionCount++;
        let singleCharN = numberAsciiArray[Math.floor(Math.random() * numberAsciiArray.length)];
        password.push(String.fromCharCode(singleCharN));
        passwordGeneratorArray = passwordGeneratorArray.concat(numberAsciiArray);
    }

    // Prompts user to choose if the want symbols. All rules of the uppercase if statement apply to this block of code
    if (confirm("Do you want symbols in your password?")) {
        symbolSelect = "Yes";
        selectionCount++;
        let singleCharS = symbolAsciiArrayTotal[Math.floor(Math.random() * symbolAsciiArrayTotal.length)];
        password.push(String.fromCharCode(singleCharS));
        passwordGeneratorArray = passwordGeneratorArray.concat(symbolAsciiArrayTotal);
    }

    // If the user hasn't chosen any parameters for their password, they're given a warning, the program closes and they must restart the generate password process
    if (uppercaseSelect === "No" && lowercaseSelect === "No" && numberSelect === "No" && symbolSelect === "No") {
        alert("You must select at least one of the conditionals");
        return;
    }

    // Final confirmation of the selected parameters. If users chooses cancel he can go back and click generate password to make new parameters
    if (!confirm(" You have chosen Uppercase: "+uppercaseSelect+". Lowercase: "+lowercaseSelect+". Numbers: "+numberSelect+". Symbols: "+symbolSelect+". Press okay to continue or cancel to start again")) {
        return;
    }

    // Calls the randomCharacterSelector function to populate the password array
    password = randomCharacterSelector(passwordGeneratorArray,passwordLength,password, selectionCount);

    // Rearranges the password array so its first indices is not populated with preselected random characters
    password.sort(function(){return 0.5 - Math.random()});

    // Turns password from an array to a string by joining each character to an empty string 
    password = password.join('')
    
    // Returns final product to writePassword function 
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

