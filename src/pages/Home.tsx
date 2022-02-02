import { ReactElement, useState } from 'react';
import { Button, CountDownTimer, Input } from '../components';
import { TimeFormat } from '../components/CountDownTimer/types';
import * as S from './styles';

function Home(): ReactElement {
  const [activeTimer, setActiveTimer] = useState(false);
  const [timerSpeed, setTimerSpeed] = useState(1000);
  const [timerFormat, setTimerFormat] = useState<TimeFormat>({
    minutes: 0,
    seconds: 0,
  });
  const [initialMinutes, setInitialMinutes] = useState<number>();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, name } = event.target;

    if (name === 'minutes') {
      setInitialMinutes(Number(value));
    }
  };

  const handleStartTimer = (): void => {
    if (initialMinutes) {
      setTimerFormat({
        minutes: initialMinutes,
        seconds: 0,
      });

      setActiveTimer(true);
    }
  };

  return (
    <S.Container>
      <S.CountDown>
        <S.WrapperTimer>
          <S.WrapperInput>
            <Input
              name="minutes"
              onChange={handleInputChange}
              label="Set minutes"
              type="number"
              placeholder="MM"
              length={2}
            />
            <Button
              className="outline"
              onClick={() => handleStartTimer()}
              style={{ marginLeft: 5 }}
            >
              Start
            </Button>
          </S.WrapperInput>

          <S.Timer>
            <CountDownTimer
              speed={timerSpeed}
              active={activeTimer}
              timeFormat={timerFormat}
            />
          </S.Timer>

          <S.SpeedButtons>
            <Button
              className={`outline ${timerSpeed === 1000 ? 'active' : ''}`}
              size="small"
              onClick={() => setTimerSpeed(1000)}
            >
              Normal
            </Button>
            <Button
              className={`outline ${timerSpeed === 750 ? 'active' : ''}`}
              size="small"
              onClick={() => setTimerSpeed(750)}
            >
              1.5x
            </Button>
            <Button
              className={`outline ${timerSpeed === 500 ? 'active' : ''}`}
              size="small"
              onClick={() => setTimerSpeed(500)}
            >
              2.0x
            </Button>
          </S.SpeedButtons>

          <Button onClick={() => setActiveTimer(!activeTimer)}>
            {activeTimer ? 'Pause' : 'Start'}
          </Button>
        </S.WrapperTimer>
      </S.CountDown>
    </S.Container>
  );
}

export default Home;
