var buttonTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#inputText")
var outputText = document.querySelector("#outputText");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getserverURL(input){
    return serverUrl + "?text=" + input  
}

function errorhandling(error){
    console.log("Error Occured!!" + error);
    alert("Opps! Somehing is wrong with server!")
}
function clickhandler(){
    input = inputText.value;
    fetch(getserverURL(input))
        .then(response => response.json())
        .then(json => {
            translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorhandling(error))
}



buttonTranslate.addEventListener("click", clickhandler);