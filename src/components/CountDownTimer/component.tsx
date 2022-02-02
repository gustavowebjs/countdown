import { useEffect, useState } from 'react';
import * as T from './types';
import * as S from './styles';

const CountDownTimer = ({
  timeFormat,
  active = false,
  speed = 1000,
}: T.TimerProps) => {
  const { minutes = 20, seconds = 60 } = timeFormat;
  const [timesUp, setTimesUp] = useState<boolean>(false);
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

  const formatTimeToRender = (mins: number, secs: number): string => {
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  useEffect(() => {
    if (active === true && !timesUp) {
      const timerId = setInterval(() => tick(), speed);
      return () => clearInterval(timerId);
    }
  });

  useEffect(() => {
    setTime([minutes, seconds]);
  }, [timeFormat]);

  return (
    <S.Container active={active}>
      <p>{formatTimeToRender(mins, secs)}</p>
    </S.Container>
  );
};

export default CountDownTimer;
