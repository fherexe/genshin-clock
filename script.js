function clock () { 
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();
    const horas = horaAgora.getHours ();
    const minutos = horaAgora.getMinutes ();
    const segundos = horaAgora.getSeconds ();
    const formatoHoras = horas.toString ().padStart (2, "0");
    const formatoMinutos = minutos.toString ().padStart (2, "0");
    const formatoSegundos = segundos.toString ().padStart (2, "0");

    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
}

setInterval(clock, 1000);

document.getElementById("btn-zhongli").addEventListener("click", function() {
    document.querySelector("body").setAttribute("class","zhongli");
})
  
  document.getElementById("btn-yelan").addEventListener("click", function() {
    document.querySelector("body").setAttribute("class","yelan");
})
  
  document.getElementById("btn-dehya").addEventListener("click", function() {
    document.querySelector("body").setAttribute("class","dehya"); // setAtribute adiciona os valores que estão na classe "dehya" no body
})