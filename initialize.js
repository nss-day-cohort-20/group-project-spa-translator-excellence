var finalMessage = {};

var result = document.getElementById("translateArea");

let inputField = document.getElementById('userInput')

function splitString(stringToSplit, separator) {
	console.log("string to split", stringToSplit);
  arrayOfWords = stringToSplit.split(separator);
  console.log("array of words", arrayOfWords);
  return arrayOfWords;
}

let arrayOfWords = [];


//Take in the user input as a phrase string
//like "Merry Christmas"
//convert to array of ["Merry", "Christmas"]
//loop through array in the function that finds and outputs words

var button = document.getElementById("translateBtn")

function buttonClick() {
	var langSelected = document.getElementById("selectedLang")
	// .options[selectedLang.selectedIndex].value
	var userWord = document.getElementById("userInput").value;
	splitString(userWord, ' ');
	finalMessage.translateGWord(userWord, langSelected);
	finalMessage.translateSWord(userWord, langSelected);
	finalMessage.translateWord(userWord, langSelected);
	finalMessage.translateJWord(userWord, langSelected);
};

button.addEventListener("click", buttonClick);


inputField.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		buttonClick();
	}
})


console.log("Merry array?", arrayOfWords);