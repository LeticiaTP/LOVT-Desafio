const darkMode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let footer = document.querySelector('footer');
    footer.classList.toggle("footer-darkmode")

    let header = document.querySelector('header');
    header.classList.toggle("header-darkmode")
}