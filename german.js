var finalMessage = (function (oldMessage) {
	oldMessage.translateGWord = function(userWord, langSelected){

	let myLexicon = {
	hello: "hallo", 
	bye: "Nebensache", 
	blue:"blau", 
	red: "reduziert", 
	good_morning:"guten morgen",
	good_evening:"guten abend"
};

var langSelected = document.getElementById("selectedLang")
        var userWord = document.getElementById("userInput").value;
        if (langSelected.options[langSelected.selectedIndex].value === "german") {
            result.innerHTML = myLexicon[userWord];
}
}
	return oldMessage;

}(finalMessage));
