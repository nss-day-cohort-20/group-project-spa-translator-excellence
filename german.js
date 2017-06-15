var finalMessage = (function (oldMessage) {
	let german = {
		hello: "hallo", 
		bye: "Nebensache", 
		blue:"blau", 
		red: "reduziert", 
		good: "guten",
		morning:"morgen",
		evening:"abend"
	};

	oldMessage.translateToGerman = function(userInput){
        for (i=0; i<userInput.length; i++) {
		   result.innerHTML += german[userInput[i]] + " ";
		   return german[userInput[i]] + " ";
		}
	}

	return oldMessage;

}(finalMessage));
