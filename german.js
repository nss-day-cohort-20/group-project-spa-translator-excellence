var finalMessage = (function (oldMessage) {
	oldMessage.translateGWord = function(){

	let myLexicon = {
	hello: "hallo", 
	bye: "Nebensache", 
	blue:"blau", 
	red: "reduziert", 
	good: "guten"
	morning:"morgen",
	evening:"abend"
};

var langSelected = document.getElementById("selectedLang")
        var userWord = document.getElementById("userInput").value;
        if (langSelected.options[langSelected.selectedIndex].value === "german") {
            result.innerHTML = myLexicon[userWord];
}
}
	return oldMessage;

}(finalMessage));