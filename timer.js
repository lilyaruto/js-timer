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
            this.onStart(this.timeRemaining);
        }
        this.interval = setInterval(this.tick, 20);
    }

    pause = () => {
        clearInterval(this.interval);
        this.onPause();
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
        } else {
            this.timeRemaining  = this.timeRemaining - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.duration.value);
    }

    set timeRemaining(time) {
        this.duration.value = time.toFixed(2);
    }
}