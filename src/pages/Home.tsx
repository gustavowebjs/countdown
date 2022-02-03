import { ReactElement, useState } from 'react';
import { Button, CountDownTimer, Input } from '../components';
import { TimeFormat } from '../components/CountDownTimer/types';
import { ReactComponent as PlaySVG } from '../assets/svgs/play.svg';
import { ReactComponent as PauseSVG } from '../assets/svgs/pause.svg';
import { ReactComponent as StartSVG } from '../assets/svgs/start.svg';
import * as S from './styles';
import { getDateTimeByTZ } from '../helpers/GetDateTimeByTZ';

function Home(): ReactElement {
  const [activeTimer, setActiveTimer] = useState(false);
  const [timerSpeed, setTimerSpeed] = useState(1000);
  const [isTimesUp, setIsTimesUp] = useState(false);
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
      setIsTimesUp(false);
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
              <StartSVG />
              Start
            </Button>
          </S.WrapperInput>
          <S.Timer>
            <CountDownTimer
              onComplete={() => setIsTimesUp(true)}
              speed={timerSpeed}
              active={activeTimer}
              timeFormat={timerFormat}
            />
          </S.Timer>
          {timerFormat.minutes > 0 && !isTimesUp && (
            <>
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

              <S.WrapperSvg>
                {activeTimer ? (
                  <PauseSVG onClick={() => setActiveTimer(!activeTimer)} />
                ) : (
                  <PlaySVG onClick={() => setActiveTimer(!activeTimer)} />
                )}
                <p>{activeTimer ? 'Pause' : 'Resume'}</p>
              </S.WrapperSvg>
            </>
          )}

          {isTimesUp && (
            <S.OfficeTimeWrapper>
              <h4>Deployment Time!</h4>
              <p>
                <strong>London:</strong> {getDateTimeByTZ('Europe/London')}
              </p>
              <p>
                <strong> New York: </strong>
                {getDateTimeByTZ('America/New_York')}
              </p>
              <p>
                <strong>Salt Lake City:</strong>{' '}
                {getDateTimeByTZ('America/Denver')}
              </p>
            </S.OfficeTimeWrapper>
          )}
        </S.WrapperTimer>
      </S.CountDown>
    </S.Container>
  );
}

export default Home;
