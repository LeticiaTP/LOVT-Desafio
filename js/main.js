const darkMode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let footer = document.querySelector('footer');
    footer.classList.toggle("footer-darkmode")

    let header = document.querySelector('header');
    header.classList.toggle("header-darkmode")
}

let formContact = document.querySelector("#form_contact");
formContact.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    let nomeValue = document.querySelector("#input_nome").value;
    let emailValue = document.querySelector("#input_email").value;
    let phoneValue = document.querySelector("#input_telefone").value;
    let mensagemValue = document.querySelector("#mensagem").value;

    const emailDefault = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/;

    if (nomeValue && emailValue && phoneValue && mensagemValue) {

        if (nomeValue.length >= 2) {

            if (phoneValue.length >= 8) {

                if (emailDefault.test(emailValue)) {
                    formContact.submit();
                } else {
                    error.innerHTML = '<strong> Correct the email! </strong>';
                }

            }else {
                error.innerHTML = '<strong> The phone number need to be 8 numbers! </strong>';
            }

        } else {
            error.innerHTML = '<strong> The name need to be more than 2 letters! </strong>';
        }

    } else {
        error.innerHTML = '<strong> All the fields need to be completed! </strong>';
    }

});