type CurrentlyTimerAction = {
  mins: number;
  secs: number;
};

type TimerAction = {
  minutes: number;
  seconds: number;
};

export const handleTimerText = (
  currently: CurrentlyTimerAction,
  time: TimerAction
): string => {
  const { mins, secs } = currently;
  const { minutes, seconds } = time;

  const currentlyTime = mins * 60 + secs;
  const timeToEnd = minutes * 60 + seconds;

  if (currentlyTime === 0) {
    return 'Time´s up!';
  }

  if (currentlyTime < timeToEnd / 2) {
    return `More than halfway there!`;
  }

  return '';
};

export const verifyTimeBreaks = (time: CurrentlyTimerAction): string => {
  const { mins, secs } = time;

  const currentlyTime = mins * 60 + secs;

  if (currentlyTime == 0) {
    return 'timesup';
  }

  if (currentlyTime <= 10) {
    return '10seconds';
  }

  if (currentlyTime <= 20) {
    return '20seconds';
  }

  return '';
};

export const formatTimeToRender = (mins: number, secs: number): string => {
  return `${mins.toString().padStart(2, '0')}:${secs
    .toString()
    .padStart(2, '0')}`;
};
