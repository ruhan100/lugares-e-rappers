const imagem = document.getElementById('imagem');

const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');

function trocarImagem(op){
    imagem.src = op;
}
botao1.addEventListener('click', function(){
    trocarImagem('imagem1.jpg');
});

botao2.addEventListener('click', function(){
    trocarImagem('imagem2.jpg');
});

botao3.addEventListener('click', function(){
    trocarImagem('imagem3.jpg');
});

botao4.addEventListener('click', function(){
    trocarImagem('imagem4.jpg');
});

botao5.addEventListener('click', function(){
    trocarImagem('imagem5.jpg');
});
