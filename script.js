// Declarando as variaveis para poder se comunicar com o html
var turnOn = document.getElementById("turnOn");
var turnOff = document.getElementById("turnOff");
var lamp = document.getElementById("lamp");
var refresh = document.getElementById("refresh")

// Funçao para saber se a lampada está quebrada
function isLampBroken() {
    return lamp.src.indexOf("quebrada") > -1;
}

// Funçao para ligar a lampada
function lampOn() {
    if (!isLampBroken()){
        lamp.src = "./assets/ligada.jpg";
    }
}

// Funçao para desligar a lampada
function lampOff() {
    if (!isLampBroken()){
        lamp.src = "./assets/desligada.jpg";
    }
}

// Funçao para quebrar a lampada
function lampBroken() {
    lamp.src = "./assets/quebrada.jpg"
}

// Funçao para trocar
function change() {
    lamp.src = "./assets/desligada.jpg"
}

// Evento para fazer com que a lampada ligue
turnOn.addEventListener("click", lampOn);

// Evento para que a lampada desligue
turnOff.addEventListener("click", lampOff);

// Evento para quando se passar o mouse a lampada ligue
lamp.addEventListener("mouseover", lampOn);

// Eveneto para quando o mouse sair a lampada deslgue
lamp.addEventListener("mouseleave", lampOff);

// Evento dois cliques para quebrar a lampada
lamp.addEventListener("dblclick", lampBroken);

refresh.addEventListener("click", change);