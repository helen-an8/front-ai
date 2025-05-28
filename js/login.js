const parent = document.querySelector(".parent")
const loginLink = document.querySelector(".signInLink")
const RegisterLink = document.querySelector(".signUpLink")
RegisterLink.addEventListener("click" , ()=>{
    parent.classList.add("active")
})
loginLink.addEventListener("click" , ()=>{
    parent.classList.remove("active")
})
// Register
const emailReg = document.querySelector("#emailreg");
const passwordReg = document.querySelector("#passwordreg");
const btnReg = document.querySelector("#btnreg");
const error_Reg = document.querySelector(".error_Reg");
const error_Reg_pass = document.querySelector(".error_Reg_pass");

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
btnReg.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (emailReg.value.trim() === "" || passwordReg.value.trim() === "") {
        alert("PLEASE ENTER YOUR EMAIL AND PASSWORD");
        return;
    }

    if (!validateEmail(emailReg.value)) {
        error_Reg.style.visibility = "visible";
        return;
    } else {
        error_Reg.style.visibility = "hidden";
    }

    if (passwordReg.value.length < 8) {
        error_Reg_pass.style.visibility = "visible";
        return;
    } else {
        error_Reg_pass.style.visibility = "hidden";
    }

    localStorage.setItem("email", emailReg.value);
    localStorage.setItem("password", passwordReg.value);

    setTimeout(() => {
        window.location = "user.html";
    }, 1500);
});

// login
const emailLogin = document.querySelector("#emaillogin")
const passwordLogin = document.querySelector("#passwordlogin")
const btnLogin = document.querySelector("#btnlogin")

const email = localStorage.getItem("email")
const password = localStorage.getItem("password")


btnLogin.addEventListener("click" , (e) => {
    e.preventDefault()
    if (email && email.trim() === emailLogin.value && password && password.trim() === passwordLogin.value) {
        
        setTimeout(() => {
            window.location = "index.html";
    }, 1500);
    }else{
        alert("ENTER A CORRECT EMAIL AND PASSWORD")
    }
})


