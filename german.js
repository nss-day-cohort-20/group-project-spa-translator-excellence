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

	oldMessage.translateGWord = function(lowerWord, langSelected){

        if (langSelected.options[langSelected.selectedIndex].value === "german") {
            result.innerHTML = myLexicon[lowerWord];
}

}
	return oldMessage;

}(finalMessage));
