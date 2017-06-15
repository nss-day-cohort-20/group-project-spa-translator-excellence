console.log("ahoy, captain.");

// for your javascript: the translate button id = translateBtn
// the dropdown to select your languate id = langSelect
// the dropdown option for your language id = your language (ie id = german)
// the element you will be displaying the output in id = translateArea
// the user input text area id = userInput
// our main variable = finalMessage

// to test if your language was selected:
// var langSelected = document.getElementById("selectedLang")
// 	if (langSelected.options[langSelected.selectedIndex].value === "spanish") {
// 		return spanish
// 	};
    
var finalMessage = (function(oldMessage) {
  let spanish = {
			merry: "feliz", 
			christmas: "navidad", 
			and: "y", 
			happy: "prospero",
			new: "ano",
			year: "felizidad",
			good: "bueno",
			a: "un",
			congratulations: "felicitaciones",
			hello: "hola",
			best_wishes: "los mejores deseos"
		};
  
	oldMessage.translateSWord = function(userInput, langSelected) {
  
	for (i=0; i<userInput.length; i++) {
		
	    if (langSelected.options[langSelected.selectedIndex].value === "spanish") {
	      result.innerHTML += spanish[userInput[i]] + " ";
	    }
   }

  }
  return oldMessage;
}(finalMessage));
