class Timer {
    constructor(duration, startBtn, pauseBtn, callbacks) {
        this.duration = duration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onPause = callbacks.onPause;
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