import { startWatch, watchcycle, stopWatch, resetWatch } from "./stopwatch";

const timer = document.getElementById("my_stopwatch");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerStop = true;
watchcycle(timerStop, hours, minutes, seconds, milliseconds, timer);
startWatch(timerStop, watchcycle);
stopWatch(timerStop);
resetWatch(hours, minutes, seconds, milliseconds, timer);
