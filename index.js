const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const circle = document.querySelector('circle');
const perimetr = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimetr);


let duration;
const timer = new Timer(durationInput,startButton,pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
        perimetr * timeRemaining / duration - perimetr
        );
    },
    onComplete(){
        console.log("timer completed!");
    }
});


