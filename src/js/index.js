//pegando o elemento que representa o botao no HTML
const botaoTrailer = document.querySelector (".botao-trailer");

//pegando o elemento modal no HTML
const modal = document.querySelector(".modal");

//pegando o elemento que representa o X
const botaoFecharModal = document.querySelector(".fechar-modal");

//pegando o elemento do video pelo ID
const video = document.getElementById("video");

//recuperando o src do video
const linkDoVideo = video.src;

//identificando o evento click do botao
botaoFecharModal.addEventListener("click", () => {
    //fechar a modal
    modal.classList.remove("aberto");
    //retirando src para encerrar o video
    video.setAttribute("src", "")
});

//identificando o evento click do botao
botaoTrailer.addEventListener("click", () => {
    //abrir a modal na tela
    modal.classList.add("aberto");
    //recuperando o src do video
    video.setAttribute("src", linkDoVideo);
});

