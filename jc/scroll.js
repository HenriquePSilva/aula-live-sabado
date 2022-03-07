window.addEventListener('scroll', () =>{
    // pegando o menu do html para o js
    const header = document.querySelector('.header-top');
    // No header, adcionar classe css quando for maior que 80, o js retira classe quando scroll for menor/igual que 80
    header.classList.toggle('scroll-active', window.scrollY > 80);
})

