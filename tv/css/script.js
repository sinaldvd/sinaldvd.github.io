// ====================== CONFIGURAÇÃO ======================
const TEMPO_ESPERA = 5 * 60 * 1000; 
const LINK_ANUNCIO = "A";

function abrirAnuncioEFullscreen() {

  window.open(LINK_ANUNCIO, "_blank");

  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

setTimeout(function () {

  document.addEventListener("click", function () {
    abrirAnuncioEFullscreen();
  }, { once: true }); 

  console.log("Ativado!");
}, TEMPO_ESPERA);
