function enlarger(){
    document.getElementById("Text").style.fontSize="24pt"; // changes the text area's font size to 24pt
}

function FancyShmancySelected(){
    document.getElementById("Text").style.fontWeight="bold"; // set the text area's font weight to bold
    document.getElementById("Text").style.color="blue"; // change font color to blue
    document.getElementById("Text").style.textDecoration="underline"; // underline the text
}

function returnStyle(){
    document.getElementById("Text").style="null"; // reset style 
}

function capitalize(){
    var userInput = document.getElementById("Text").value; // get the input in textarea
    userInput = userInput.toUpperCase(); // capitaize all text
    var parts = userInput.split("."); // split the text 
    userInput = parts.join("-Moo."); // adds a suffix of "-Moo" to the last word of each sentence
    document.getElementById("Text").value = userInput; // update the user input
}