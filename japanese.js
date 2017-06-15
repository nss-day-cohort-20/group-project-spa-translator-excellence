console.log("Is japanese.js linked properly??", );

var finalMessage = (function(oldMessage) {
    oldMessage.translateJWord = function() {

        let japanese = {
            happy: 'ureshii',
            good: 'yoroshii',
            christmas: 'Kurisumasu',
            birthday: 'tanjoubi',
            newyear: 'oshougatsu',
            new: 'atarashii',
            year: 'toshi',
            and: 'to',
            a: '',
            merry: 'tanoshii',
            congratulations: 'omedetou-gozaimasu',
            congrats: 'omedetou',
            hello: 'konnichiwa', 
            best_wishes: 'yoroshiku onegaishimasu'
            };
        var langSelected = document.getElementById("selectedLang")
        var userWord = document.getElementById("userInput").value;
        if (langSelected.options[langSelected.selectedIndex].value === "japanese") {
            result.innerHTML = japanese[userWord];
        } 
    }
    return oldMessage;
}(finalMessage));



// the translate button id = translateBtn
// the dropdown to select your languate id = langSelect
// the dropdown option for your language id = your language (ie id = german)
// the element you will be displaying the output in id = translateArea
// the user input text area id = userInput
// our main variable = finalMessage


