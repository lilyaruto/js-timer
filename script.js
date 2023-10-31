const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");

const circle = document.getElementById("circle")
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart() {
        console.log("started");
    },
    onTick() {
        circle.setAttribute("stroke-dashoffset", currentOffset);
        currentOffset = currentOffset-50;
        console.log("tick")
    },
    onPause() {

    }
});