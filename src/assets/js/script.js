
const btnClose = document.querySelector('.btn-close');
const mobileMenu = document.querySelector('.mobile');
const overflow = document.querySelector('.overflow');

// Abre o menu ao clicar no ícone de hambúrguer
const openMenu = () => {
    mobileMenu.classList.add('open');
    overflow.classList.add('show');
};

// Fecha o menu ao clicar no botão de fechar ou no fundo escuro
const closeMenu = () => {
    mobileMenu.classList.remove('open');
    overflow.classList.remove('show');
};

// Evento para fechar o menu
btnClose.addEventListener('click', closeMenu);
overflow.addEventListener('click', closeMenu);
