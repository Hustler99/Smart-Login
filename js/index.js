var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var userData = JSON.parse(localStorage.getItem("userData"));
var suc = document.getElementById("sucsses");
var dng = document.getElementById("danger");
var btn2 = document.getElementById("btn2")


console.log(userData);

var emails = [];
var passwords = [];

for (var i = 0; i < userData.length; i++) {
    emails.push(userData[i].uEmail);
    passwords.push(userData[i].uPass);
}

console.log(emails);
console.log(passwords);

function userLog() {
    for (var i = 0; i < emails.length; i++) {
        if (emailInput.value == emails[i] && passwordInput.value == passwords[i]) {
            suc.classList.remove("d-none");
            window.location.href = "./home.html";

        } else {
            dng.classList.remove("d-none")
        }
    }
}
btn2.addEventListener("click", function (e) {
    userLog();
});