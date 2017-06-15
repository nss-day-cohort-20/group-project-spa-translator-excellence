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

	oldMessage.translateWord = function(lowerWord, langSelected) {
	console.log(lowerWord);
		if (langSelected.options[langSelected.selectedIndex].value === "french"){
			if (french[lowerWord] !== undefined){
			result.innerHTML = french[lowerWord];
			} else {
				result.innerHTML = "We don't know that word yet!";
			}
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


