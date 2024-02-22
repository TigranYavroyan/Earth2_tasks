const boxDiv = document.getElementById("box")
const paragraph = document.getElementById("changable")

let a = true;

function clickHandler (e) {
    if (a) {
        paragraph.textContent = "This is the actual text"
        a = false;
    }
    else {
        paragraph.textContent = "This text has to be changed (this is not the actual text)";
        a = true;
    }
}

boxDiv.addEventListener("click" , clickHandler)