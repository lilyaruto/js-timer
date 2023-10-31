class Timer {
    constructor(duration, startBtn, pauseBtn, callbacks) {
        this.duration = duration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if (callbacks) {
            this.onStart = callbacks.onStart;
        }

        this.startBtn.addEventListener("click", this.start);
        this.pauseBtn.addEventListener("click", this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
        } else {
            this.timeRemaining  = this.timeRemaining - 1;
        }
    }

    get timeRemaining() {
        return parseInt(this.duration.value);
    }

    set timeRemaining(time) {
        this.duration.value = time;
    }
}

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