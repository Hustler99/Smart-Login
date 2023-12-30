    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userPassword = document.getElementById("password");
    var textSuc = document.getElementById("sucsses");
    var textDanger = document.getElementById("dang");
    var textDanger2 = document.getElementById("dang2");
    var btn1 = document.getElementById("btn1");
    var link1 = document.getElementById("link");
    var userInfo = []
    var usersextisemail = [];
    if (localStorage.getItem("userData") != null) {
        userInfo = JSON.parse(localStorage.getItem("userData"))
    }
    for (var i = 0; i < userInfo.length; i++) {
        usersextisemail.push(userInfo[i].uEmail);
    }

    console.log(usersextisemail);
    console.log(userInfo);

    function addUser() {
        if (
            userPassword.value != "" && userName.value != "" && userEmail.value != "") {
            if (usersextisemail.includes(userEmail.value)) {
                textDanger2.classList.remove("d-none");
            } else {
                var user = {
                    uName: userName.value,
                    uEmail: userEmail.value,
                    uPass: userPassword.value,
                };

                textSuc.classList.remove("d-none");
                textDanger.classList.add("d-none");
                textDanger2.classList.add("d-none");
                userInfo.push(user);
                localStorage.setItem("userData", JSON.stringify(userInfo));
                window.location.reload();

            }
        } else if (userPassword.value == "" && userName.value == "" && userEmail.value == "") {
            textDanger.classList.remove("d-none");
            textSuc.classList.add("d-block");
        }
    }
    btn1.addEventListener("click", function (e) {
        addUser();
    })
