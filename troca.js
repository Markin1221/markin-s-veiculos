let fotos = ['./imgs/ecosport.jpg', './imgs/agile.jpg'];
let index = 0;

let imgC = document.getElementById('imgs');
let butprox = document.getElementById('prox');
let butantes = document.getElementById('antes');


function atualizarImagem() {
    imgC.src = fotos[index]; 
}


butprox.addEventListener('click', function prox() {
    index++;
    if (index >= fotos.length) { 
        index = 0; 
    }
    atualizarImagem(); 
    console.log("prox ta bom")
});


butantes.addEventListener('click', function antes() {
    index--;
    if (index < 0) { 
        index = fotos.length - 1; 
    }
    atualizarImagem();
    console.log("antes ta bom")
});


atualizarImagem();