var finalMessage = (function (oldMessage) {
	oldMessage.translateGWord = function(userInput, langSelected){

        for (i=0; i<userInput.length; i++) {

					let myLexicon = {
					hello: "hallo", 
					bye: "Nebensache", 
					blue:"blau", 
					red: "reduziert", 
					good: "guten",
					morning:"morgen",
					evening:"abend"
				};

           result.innerHTML += myLexicon[userInput[i]] + " ";

}
}
	return oldMessage;

}(finalMessage));
