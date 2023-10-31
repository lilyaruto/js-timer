class Timer {
    constructor(duration, startBtn, pauseBtn) {
        this.duration = duration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        this.startBtn.addEventListener("click", this.start);
        this.pauseBtn.addEventListener("click", this.pause);
    }

    start = () => {
        console.log("start");
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
        console.log("pause");
    }

    tick = () => {
        console.log("tick");
    }
}

const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");

const timer = new Timer(durationInput, startBtn, pauseBtn);