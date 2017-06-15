var finalMessage = (function (oldMessage) {
	let myLexicon = {
		hello: "hallo", 
		bye: "Nebensache", 
		blue:"blau", 
		red: "reduziert", 
		good: "guten",
		morning:"morgen",
		evening:"abend"
	};

	oldMessage.translateGWord = function(userInput, langSelected){
        for (i=0; i<userInput.length; i++) {


           result.innerHTML += myLexicon[userInput[i]] + " ";

}
}

	return oldMessage;

}(finalMessage));
