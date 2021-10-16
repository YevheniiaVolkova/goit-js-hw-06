
const form = document.querySelector("form.login-form");
console.log(form);
form.addEventListener("submit", handleSubmit);

function handleSubmit  (event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('Заполните все поля')
    }

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};

    form.addEventListener("submit", handleSubmit); 
