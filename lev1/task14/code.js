var inputField = document.getElementById("input");
let arr

inputField.addEventListener("input", function() {
    arr = inputField.value;
    console.log("Input field: ", arr);
});