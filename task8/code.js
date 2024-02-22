const event_listenner = document.getElementById("click_me");
var counter = 0;

event_listenner.addEventListener("click" , function(e){
    let text = document.getElementById("counter");
    ++counter;
    text.textContent = "The button is clicked " + counter + " times";
});