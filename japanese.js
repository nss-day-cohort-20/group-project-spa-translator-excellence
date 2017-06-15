console.log("Is japanese.js linked properly??", );

var finalMessage = (function(oldMessage) {
    oldMessage.translateJWord = function(userInput, langChoice) {

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
        if (langChoice.options[langChoice.selectedIndex].value === "japanese") {
            result.innerHTML = japanese[userInput];
        } 
    }
    return oldMessage;
}(finalMessage));



// the translate button id = translateBtn
// the dropdown to select your languate id = langSelect
// the dropdown option for your language id = your language (ie id = german)
// the element you will be displaying the output in id = translateArea
