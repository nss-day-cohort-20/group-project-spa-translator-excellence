var finalMessage = (function(oldMessage) {

	oldMessage.translateWord = function(userWord, langSelected) {
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
		var langSelected = document.getElementById("selectedLang")
		var userWord = document.getElementById("userInput").value;
		var lowerWord = userWord.toLowerCase();
		if (langSelected.options[langSelected.selectedIndex].value === "french") {
			result.innerHTML = french[lowerWord];
		} 
	}
	return oldMessage;
}(finalMessage));

// oldMessage.noWord = function() {
// 			let french = {
// 			happy: "content",
// 			good: "bien",
// 			christmas: "noel",
// 			birthday: 'anniversaire',
//     		new: 'nouveau',
// 		    year: 'an',
// 		    and: 'et',
// 		    a: 'une',
// 		    merry: 'joyeux',
// 		    congratulations: 'toutes nos félicitations',
// 		    congrats: 'félicitations',
// 		    hello: 'bonjour',
// 		    best: 'meilleur',
// 		    wishes: 'vœux'
// 		};
// 	var userWord = document.getElementById("userInput").value;
// var lowerWord = userWord.toLowerCase();
// 	if (lowerWord !== french[lowerWord]) {
// 			result.innerHTML = "that word is not in our dictionary yet!";
// 		} else if ()
// }


