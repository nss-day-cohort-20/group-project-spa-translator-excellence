var button = document.getElementById("translateBtn")

function buttonClick() {
	finalMessage.translateGWord();
	finalMessage.translateWord();
};

button.addEventListener("click", buttonClick);


inputField.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		buttonClick();
	}
})