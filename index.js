const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

function formatarTempo(totalDeSegundo) {
  const horas = String(Math.floor(totalDeSegundo / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((totalDeSegundo % 3600) / 60)).padStart(2, "0");
  const segundos = String(Math.floor(totalDeSegundo % 60)).padStart(2, "0");

  return `${horas}:${minutos}:${segundos}`;
}

let segundos = 0;
let timer;
let rodando = false;

iniciar.addEventListener("click", function (event) {
  if (!rodando) {
    timer = setInterval(function () {
      relogio.innerHTML = formatarTempo(segundos);
      segundos++;
    }, 1000);

    rodando = true;
  }
});

pausar.addEventListener("click", function (event) {
  if (rodando) {
    setTimeout(function () {
      clearInterval(timer);
      rodando = false;
    });
  } else {
    timer = setInterval(function () {
      relogio.innerHTML = formatarTempo(segundos);
      segundos++;
    }, 1000);

    rodando = true;
  }
});

zerar.addEventListener("click", function (event) {
  clearInterval(timer);
  rodando = false;
  segundos = 0;
  relogio.innerHTML = formatarTempo(segundos);
});
