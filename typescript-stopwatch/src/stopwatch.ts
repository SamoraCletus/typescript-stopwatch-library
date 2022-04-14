export function startWatch(timerStop: boolean, watchcycle: any) {
  if (timerStop) {
    timerStop = false;
    watchcycle();
  }
}
export function stopWatch(timerStop: boolean) {
  if (timerStop == false) {
    timerStop = true;
  }
}

export function watchcycle(
  timerStop: boolean,
  milliseconds: number,
  seconds: number,
  minutes: number,
  hours: number,
  timer: HTMLElement
): number | string | undefined {
  if (timerStop == false) {
    milliseconds = milliseconds + 10;

    if (milliseconds == 1000) {
      milliseconds = 0;
      seconds = seconds + 1;
    }
    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    if (minutes == 60) {
      hours = hours + 1;
      minutes = 0;
      seconds = 0;
    }

    let hr = hours < 10 ? "0" + hours : hours;
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;
    let milsec =
      milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    setTimeout("watchcycle()", 1000);
    return (timer.innerHTML = hr + ":" + mins + ":" + secs + ":" + milsec);
  }
}

export function resetWatch(
  milliseconds: number,
  seconds: number,
  minutes: number,
  hours: number,
  timer: HTMLElement
) {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  return (timer.innerHTML = "00:00:00");
}
