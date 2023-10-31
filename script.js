class Timer {
    constructor(duration, startBtn, pauseBtn) {
        this.duration = duration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
    }

    start() {
        console.log("start");
    }
}

const durationInput = document.getElementById("#duration");
const startBtn = document.getElementById("#start");
const pauseBtn = document.getElementById("#pause");

const timer = new Timer(durationInput, startBtn, pauseBtn);