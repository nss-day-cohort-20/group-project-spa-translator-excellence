var finalMessage = (function (oldMessage) {
	let german = {
		hello: "hallo", 
		bye: "Nebensache", 
		blue:"blau", 
		red: "reduziert", 
		good: "guten",
		morning:"morgen",
		evening:"abend"
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
	"I'm sorry" "es tut mir leid"
	};

	oldMessage.translateToGerman = function(userInput, langSelected){
        for (i=0; i<userInput.length; i++) {
        	if (german[userInput] !== undefined) {
		   		result.innerHTML += german[userInput[i]] + " ";
		   	} else {
		   		result.innerHTML += "We don't know that word yet!"
		   }
		}
	}

	return oldMessage;

}(finalMessage));
