var flag = true;
const text = document.getElementById("text").innerHTML;

function to_click (button) {
    if (button.innerHTML === "Show") {
        button.textContent = "Hide";
    }
    else {
        button.textContent = "Show";
    }
}

function to_toggle () {
    button = document.getElementById("show/hide");
    to_click(button);
    if (flag) {
        document.getElementById("text").innerHTML = null;
        flag = false;
    }
    else {
        document.getElementById("text").innerHTML = text;
        flag = true;
    }
}