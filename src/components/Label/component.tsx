import { ReactElement } from 'react';
import * as T from './types';
import * as S from './styles';

const Label = (props: T.LabelProps): ReactElement => {
  const { text } = props;

  return (
    <S.Container>
      <S.Label>{text}</S.Label>
    </S.Container>
  );
};

export default Label;
