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

  
	oldMessage.translateToSpanish = function(userInput) {
  
		for (i=0; i<userInput.length; i++) {

		if (spanish[userInput] !== undefined) {
		   		result.innerHTML += spanish[userInput[i]] + " ";
        return spanish[userInput[i]] + " ";
		   	} else {
		   		result.innerHTML += "We don't know that word yet!"
		   }

	   }
	 }

  return oldMessage;
}(finalMessage));
