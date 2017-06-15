var button = document.getElementById("translateBtn")

function buttonClick() {
	finalMessage.translateWord();
};

button.addEventListener("click", buttonClick);


inputField.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		buttonClick();
	}
})