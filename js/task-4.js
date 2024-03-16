const form = document.querySelector(".login-form")
form.addEventListener ("submit",formSubmit)
function formSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    if (email.value === ""|| password.value === "") {
        alert ('All form fields must be filled in')
    }
    else {
        const infoAccount = {
        email: email.value,
        password: password.value,
        }
        console.log(infoAccount)
    }

    event.target.reset();
    

}

