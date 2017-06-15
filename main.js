var button = document.getElementById("translateBtn")

function buttonClick() {
	finalMessage.translateSWord();
	finalMessage.translateWord();
	finalMessage.translateJWord();
};

button.addEventListener("click", buttonClick);


inputField.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		buttonClick();
	}
})