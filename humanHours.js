function humanHOurs(secs) {
  const hours = secs >= 3600 ? secs / 60 / 60 : 0
  const rest = hours > 0 ? (hours % 1) * 60 * 60 : secs
  const minutes = rest >= 60 ? (rest / 60) : 0
  const seconds = minutes >= 1 ? (minutes % 1) * 60 : secs - (hours * 60 * 60) - (minutes * 60)
  const checkHours = Math.floor(hours) >= 0 && Math.floor(hours) <= 99;
  const checkMinutes = Math.floor(minutes) >= 0 && Math.floor(minutes) <= 59;
  const checkSeconds = Math.floor(seconds) >= 0 && Math.floor(seconds) <= 59;

  if (checkHours && checkMinutes && checkSeconds) {
    const time = {
      hours: Math.floor(hours).toString(),
      minutes: Math.floor(minutes).toString(),
      seconds: Math.round(seconds).toString(),
    };

    if (time.hours.length === 1) {
      time.hours = "0".concat(time.hours);
    }

    if (time.minutes.length === 1) {
      time.minutes = "0".concat(time.minutes);
    }

    if (time.seconds.length === 1) {
      time.seconds = "0".concat(time.seconds);
    }

    return time.hours + ":" + time.minutes + ":" + time.seconds;
  }

  return false;
}

console.log(humanHOurs(45296));
