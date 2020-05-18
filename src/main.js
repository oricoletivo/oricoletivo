
// var countDate = new Date('Mar 20, 2020 00:00:00').getTime();

// function newYear() {
//     var now = new Date().getTime();
//         gap = countDate - now;

//     var second = 1000;
//     var minute = second * 60;
//     var hour = minute * 60;
//     var day = hour * 24;

//     var d = Math.floor(gap / (day));
//     var h = Math.floor((gap % (day)) / (hour));
//     var m = Math.floor((gap % (hour)) / (minute));
//     var s = Math.floor((gap % (minute)) / second);

//     document.getElementById('day').innerHTML = d;
//     document.getElementById('hour').innerHTML = h;
//     document.getElementById('minute').innerHTML = m;
//     document.getElementById('second').innerHTML = s;
// }

// setInterval(function() {
//     newYear();
//     }, 1000);



var target_date = new Date("may 22, 2020").getTime();
var dias;
let horas;
let minutos;
let segundos;
var regressiva = document.getElementById("regressiva");

setInterval(function () {

    let current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
    document.getElementById('hora').innerHTML = horas;
    document.getElementById('minuto').innerHTML = minutos;
    document.getElementById('segundo').innerHTML = segundos;
  

}, 1000);
