const menu_button = document.querySelector('#menu-button');
const menu_nav = document.querySelector('#menu-nav');
const toggle = () => {
    menu_nav.classList.toggle('d-none')
}

menu_button.addEventListener('click', toggle)