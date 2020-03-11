const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const circle = document.querySelector('circle');
const perimetr = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimetr);


let currentOffset = 0;
const timer = new Timer(durationInput,startButton,pauseButton, {
    onStart() {
        console.log("timer started!");
    },
    onTick(){
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset -= 50;
    },
    onComplete(){
        console.log("timer completed!");
    }
});


