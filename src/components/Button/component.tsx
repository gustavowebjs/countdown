import React, { ReactElement } from 'react';
import * as S from './styles';
import * as T from './types';

const Button = (props: T.ButtonProps): ReactElement => {
  const { children, onClick } = props;

  return (
    <S.Container>
      <S.Button onClick={onClick}>{children}</S.Button>
    </S.Container>
  );
};

export default Button;
