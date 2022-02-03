import { useEffect, useState } from 'react';
import * as T from './types';
import * as S from './styles';
import {
  formatTimeToRender,
  handleTimerText,
  verifyTimeBreaks,
} from './actions';

const CountDownTimer = ({
  timeFormat,
  active = false,
  speed = 1000,
  onComplete,
}: T.TimerProps) => {
  const { minutes = 20, seconds = 60 } = timeFormat;
  const [timesUp, setTimesUp] = useState<boolean>(false);
  const [timerText, setTimerText] = useState<string>('');
  const [styleText, setStyleText] = useState<string>('');
  const [[mins, secs], setTime] = useState<[number, number]>([
    minutes,
    seconds,
  ]);

  const tick = (): void => {
    if (mins === 0 && secs === 0) {
      setTimesUp(true);
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  useEffect(() => {
    if (active === true && !timesUp) {
      const text = handleTimerText({ mins, secs }, { minutes, seconds });
      setTimerText(text);

      const styleTextBreak = verifyTimeBreaks({ mins, secs });
      setStyleText(styleTextBreak);

      const timerId = setInterval(() => tick(), speed);
      return () => clearInterval(timerId);
    }
  });

  useEffect(() => {
    setTime([minutes, seconds]);
    setTimesUp(false);
  }, [timeFormat]);

  useEffect(() => {
    if (timesUp) onComplete && onComplete();
  }, [timesUp]);

  return (
    <S.Container styleText={styleText} active={active}>
      <S.TimerText> {timerText}</S.TimerText>
      <p>{formatTimeToRender(mins, secs)}</p>
    </S.Container>
  );
};

export default CountDownTimer;
