var finalMessage = (function(oldMessage) {
let french = {
			happy: "content",
			good: "bien",
			christmas: "noel",
			birthday: 'anniversaire',
    		new: 'nouveau',
		    year: 'an',
		    and: 'et',
		    a: 'une',
		    merry: 'joyeux',
		    congratulations: 'toutes nos félicitations',
		    congrats: 'félicitations',
		    hello: 'bonjour',
		    best: 'meilleur',
		    wishes: 'vœux'
		};

	oldMessage.translateToFrench = function(userInput) {
	 for (i=0; i<userInput.length; i++) {
	    result.innerHTML += french[userInput[i]] + " ";
	    return french[userInput[i]] + " ";
    }
}
	return oldMessage;
}(finalMessage));