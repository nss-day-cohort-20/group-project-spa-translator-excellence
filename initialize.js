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


//Take in the user input as a phrase string like "Merry Christmas"
//convert to array of ["Merry", "Christmas"]
//loop through array in the function that finds and outputs words (in each lang file)

var button = document.getElementById("translateBtn")

function buttonClick() {
	var langSelected = document.getElementById("selectedLang")
	var whichLang = langSelected.options[langSelected.selectedIndex].value
	var userWord = document.getElementById("userInput").value;
	var lowerWord = userWord.toLowerCase();
	splitString(userWord, ' ');
	decideTranslate(whichLang);
};

function decideTranslate(langSelect) {
	if (langSelect === "german") {
			finalMessage.translateGWord(arrayOfWords, langSelect);
		} else if (langSelect === "spanish") {
			finalMessage.translateSWord(arrayOfWords, langSelect);
		} else if (langSelect === "french") {
			finalMessage.translateWord(arrayOfWords, langSelect);
		} else if (langSelect === "japanese") {
			finalMessage.translateJWord(arrayOfWords, langSelect);
		}
}


button.addEventListener("click", buttonClick);

inputField.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		buttonClick();
	}
})


console.log("Merry array?", arrayOfWords);