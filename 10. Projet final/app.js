const logoMenu = document.querySelector('.logoMenuImg');
const contItems = document.querySelector('.contItems');
const arrItems = document.querySelectorAll('.items');

logoMenu.addEventListener('click', () => {
    // Si le menu n'a que la classe contItems, on l'affiche
    if (contItems.className === 'contItems') {
        contItems.classList.add('responsive')
        logoMenu.style.width = "30px";
        logoMenu.style.top = "5px";
        logoMenu.src = "ressources/close.svg";
    } else { // Sinon on la masque
        contItems.classList.remove('responsive')
        logoMenu.style.width = "30px";
        logoMenu.style.top = "13px";
        logoMenu.src = "ressources/menu.svg";
    }
})

// Au clic, on masque les items et le menu
arrItems.forEach(item => {
    item.addEventListener('click', () => {
        contItems.className = "contItems";
        logoMenu.src = "ressources/menu.svg";
        logoMenu.style.width = "30px";
        logoMenu.style.top = "13px";
    })
})