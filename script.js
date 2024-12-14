const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu');

botaoMenu.addEventListener('click', (event) => {
    event.preventDefault(); // Previne a ação padrão
    const isOpen = menu.classList.toggle('aberto'); // Alterna a classe 'aberto'
    menu.setAttribute('aria-hidden', !isOpen); // Atualiza o atributo aria-hidden
});