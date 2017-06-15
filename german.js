var finalMessage = (function (oldMessage) {
	let german = {
		hello: "hallo", 
		bye: "Nebensache", 
		blue:"blau", 
		red: "reduziert", 
		good: "guten",
		morning:"morgen",
		evening:"abend",
    	the: "das",
		house: "hause",
		work: "arbeit",
		please: "bitte",
		yes: "ja",
		no: "nein",
		Pardon: "entschuldigung"
	};

	oldMessage.translateToGerman = function(userInput){
        for (i=0; i<userInput.length; i++) {

        	if (german[userInput] !== undefined) {
		   		result.innerHTML += german[userInput[i]] + " ";
           return german[userInput[i]] + " ";
		   	} else {
		   		result.innerHTML += "We don't know that word yet!"
		   }
		}
	}

	return oldMessage;

}(finalMessage));
