const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", function () {
  body.classList.toggle("modo-escuro");
  const imagemBotao = botaoAlterarTema.querySelector("img");
  if (body.classList.contains("modo-escuro")) {
    imagemBotao.src = "./src/imagens/moon.png";
  } else {
    imagemBotao.src = "./src/imagens/sun.png";
  }
});
const imagemInterativa = document.querySelector("#cartaoespecial .face.front img");

imagemInterativa.addEventListener("click", function() {
  if (imagemInterativa.style.display === "none") {
    imagemInterativa.style.display = "flex";
  } else {
    imagemInterativa.style.display = "none";
  }
});
