function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
const relogioIntervalo = document.querySelector('.relogioIntervalo');
// const setBreakButton = document.querySelection('.setBreakButton');
// const setWorkButton = document.querySelection('.setWorkButton');
// const setBreakInput = document.querySelection('.setBreakInput');
// const setWorkInput = document.querySelection('.setWorkInput');


let segundos = 1495;
let segundosIntervalo = 295;
let timer;
let timerIntervalo;

let workDuration;
let breakDuration;





const audioWork = new Audio('./audioWork.ogg');
const audioBreak = new Audio('./audioBreak.ogg');

function playAudio(sound){

    sound.play();
    setTimeout(() => {
        sound.pause();
    }, 7000);

}



function iniciaRelogioIntervalo(){
    timerIntervalo = setInterval(function (){
        segundosIntervalo++;
        relogioIntervalo.innerHTML = criaHoraDosSegundos(segundosIntervalo);

        if (segundosIntervalo === 5*60){
            clearInterval(timerIntervalo);
            segundosIntervalo = 0;
            iniciaRelogio();
            segundos = 0;
            playAudio(audioWork);
        }

    }, 1000)
}


function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);

        if (segundos === 25*60){
            clearInterval(timer);
            iniciaRelogioIntervalo();
            playAudio(audioBreak);
        }


    }, 1000)
}


iniciar.addEventListener('click', function(event){
    iniciaRelogio()
});

parar.addEventListener('click', function(event){
    clearInterval(timer);
    clearInterval(timerIntervalo);
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = "00:00:00"
    relogioIntervalo.innerHTML = "00:00:00"
    segundos = 0;
});

// setWorkButton.addEventListener('click', function(event){
//     const workMinutes = parseInt(workInput.value);
//     workDuration = workMinutes;
//     alert("Duração do timer definida para ${workDuration} minutos");
// })

// setBreakButton.addEventListener('click', function(event){
//     const breakMinutes = parseInt(breakInput.value);
//     breakDuration = breakMinutes;
// })



relogio.innerHTML = criaHoraDosSegundos(segundos);