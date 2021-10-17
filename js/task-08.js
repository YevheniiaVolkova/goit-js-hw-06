
const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit  (event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('Заполните все поля')
    }
 const object = {
        email: `${email.value}`,
        password: `${password.value}`,
 };
       console.log(object);
    event.currentTarget.reset();
}

