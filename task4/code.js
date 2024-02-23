function text_adder () {
  var text = document.getElementById("add_text");
  if (text.textContent === "Hello")
    text.textContent = "GoodBye";
  else
    text.textContent = "Hello";
}