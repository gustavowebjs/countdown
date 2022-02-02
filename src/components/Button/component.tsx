import React, { ReactElement } from 'react';
import * as S from './styles';
import * as T from './types';

const Button = (props: T.ButtonProps): ReactElement => {
  const { children, onClick, type, size = 'medium', style, className } = props;

  return (
    <S.Container>
      <S.Button
        className={className}
        style={style}
        type={type}
        size={size}
        onClick={onClick}
      >
        {children}
      </S.Button>
    </S.Container>
  );
};

export default Button;
