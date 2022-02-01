import React, { ReactElement } from 'react';
import { Button, CountDownTimer } from '../components';
import * as S from './styles';

function Home(): ReactElement {
  const hoursMinSecs = { hours: 1, minutes: 20, seconds: 40 };

  return (
    <S.Container>
      <S.CountDown>
        <S.WrapperTimer>
          <S.Timer>
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
          </S.Timer>
          <Button>Start</Button>
        </S.WrapperTimer>
      </S.CountDown>
    </S.Container>
  );
}

export default Home;
