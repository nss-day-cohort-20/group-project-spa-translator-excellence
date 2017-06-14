var finalMessage = (function(oldMessage) {

	oldMessage.translateWord = function() {
		let french = {
			happy: "content",
			good: "bien",
			christmas: "noel"
			
		};
		var langSelected = document.getElementById("selectedLang")
		var userWord = document.getElementById("userInput").value;
		if (langSelected.options[langSelected.selectedIndex].value === "french") {
			result.innerHTML = french[userWord];
		} 
	}
	return oldMessage;
}(finalMessage));



