const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart() {
        console.log("started");
    },
    onTick() {

    },
    onPause() {

    }
});