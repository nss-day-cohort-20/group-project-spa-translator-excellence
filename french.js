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

	oldMessage.translateWord = function(userInput, langSelected) {
	 for (i=0; i<userInput.length; i++) {
		   result.innerHTML += french[userInput[i]] + " ";
		}
    }
	return oldMessage;
}(finalMessage));




// for (i=0; i<userInput.length; i++) {
//     if (langSelected.options[langSelected.selectedIndex].value === "french"){
// 			if (french[lowerWord] !== undefined){
// 			result.innerHTML = french[lowerWord[i] + " "];
// 			} else {
// 				result.innerHTML = "We don't know that word yet!";
// 			}
//     }