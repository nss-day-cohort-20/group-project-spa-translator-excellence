var button = document.getElementById("translateBtn")

function buttonClick() {
	finalMessage.translateWord();
	finalMessage.traslateSWord();
	finalMessage.translateJWord();
	finalMessage.translateGWord();
};

button.addEventListener("click", buttonClick);


inputField.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		buttonClick();
	}
})