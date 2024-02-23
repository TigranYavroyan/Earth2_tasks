const is_valid = document.getElementById("submit");

function is_empty (str) {
    if (str.trim() === "") {
        return true;
    }
    else {
        return false;
    }
}

is_valid.addEventListener("click", function(e) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (is_empty(email) || is_empty(password)) {
        alert("Input the email/password");
    }
    else if (!(email.includes("@gmail.com") || email.includes("@mail.ru") || email.includes("@coderepublic.am")))
        alert("Email format is wrong");
});