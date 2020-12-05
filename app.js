var buttonTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#inputText")
var outputText = document.querySelector("#outputText");

 var serverUrl = "https://api.funtranslations.com/translate/minion.json"

var outputStyle = {
    "background-color": "#0A75BC",
    "width": "500px",
    "height": "200px",
    "margin": "auto",
    "padding" :"1rem",
    "border" :  "white solid 2px",
    "borderRadius" :  "5px",
    "fontFamily" : "'Roboto', sans-serif",
    "color" :  "black",
    "textAlign" : "left"
};

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
        .catch(errorhandling)
        Object.assign(outputText.style, outputStyle);
}
buttonTranslate.addEventListener("click", clickhandler);
