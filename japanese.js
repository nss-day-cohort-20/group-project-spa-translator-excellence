var finalMessage = (function(oldMessage) {
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
  
    oldMessage.translateToJapanese = function(userInput) {

        for (i=0; i<userInput.length; i++) {
            if (japanese[userInput] !== undefined) {
                result.innerHTML += japanese[userInput[i]] + " ";
                return japanese[userInput[i]] + " ";
            } else {
                result.innerHTML += "We don't know that word yet!"
           }

        } 
    }
    return oldMessage;
}(finalMessage));



// the translate button id = translateBtn
// the dropdown to select your languate id = langSelect
// the dropdown option for your language id = your language (ie id = german)
// the element you will be displaying the output in id = translateArea
