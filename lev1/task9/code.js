function to_submit () {
    var inputValue = document.getElementById("input");

    if (inputValue.value.trim() === "") {
        alert("Please enter an email address");
    }
}