setInterval(showtime,1000);
function showtime(){
let tiempo = new Date();
let hora = tiempo.getHours();
let minutos = tiempo.getMinutes();
let segundos = tiempo.getSeconds();
am_pm = 'AM'

if(hora > 12){
    hora -= 12;
    am_pm = 'PM';
}
if (hora == 0 ){
    hora = 12;
    am_pm = 'AM';
}

hora = hora < 10 ? '0' + hora : hora;
minutos = minutos < 10 ? '0' + minutos : minutos;
segundos = segundos < 10 ? '0' + segundos : segundos;

let currentTime = hora + ':' + minutos + ':' + segundos + am_pm

document.getElementById('reloj').innerHTML = currentTime;

}

showtime();