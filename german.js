var finalMessage = (function (oldMessage) {
	oldMessage.translateGWord = function(){

	let myLexicon = {
	"hello": "hallo", 
	"bye": "Nebensache", 
	"blue":"blau", 
	"red": "reduziert", 
	"good morning":"guten morgen",
	"good afternoon": "guten nachmittag",
	"good evening":"guten abend",
	"the": "das",
	"house": "hause",
	"work": "arbeit",
	"thank you" "danke",
	"thank you very much" "vielen dank",
	"you're welcome": "bitteschön",
	"please": "bitte",
	"yes": "ja",
	"no": "nein" 
	"Excuse me" "entschuldigen Sie bitte",
	"Pardon me" "entschuldigung",
	"I'm sorry" "es tut mir leid",

};

var langSelected = document.getElementById("selectedLang")
        var userWord = document.getElementById("userInput").value;
        if (langSelected.options[langSelected.selectedIndex].value === "german") {
            result.innerHTML = myLexicon[userWord];
}
}
	return oldMessage;

}(finalMessage));


console.log ("The German word for hello", myLexicon.red)