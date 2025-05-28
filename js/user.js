const firstname = document.querySelector("#firstname")
const lastname = document.querySelector("#lastname")
const btnReguser = document.querySelector("#btnReguser")


btnReguser.addEventListener("click" , (e)=>{
    e.preventDefault()
    if(firstname.value.trim() === "" || lastname.value.trim() === ""){
        alert("PLEASE ENTER YOUR LASTNAME AND FIRSTNAME")
    }else{
        setTimeout( ()=>{
            window.location = "index.html"
        } , 1500)
        localStorage.setItem("first" , firstname.value)
        localStorage.setItem("last" , lastname.value)
    }

})