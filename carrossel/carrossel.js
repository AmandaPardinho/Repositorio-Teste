const carrossel = document.querySelectorAll('.item');
let indiceAtual = 0;

setInterval(() => {
    carrossel[indiceAtual].classList.remove('active');
    indiceAtual = (indiceAtual + 1) % carrossel.length;
    carrossel[indiceAtual].classList.add('active');
}, 3000);
 setInterval();
