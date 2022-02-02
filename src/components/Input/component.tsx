import React from 'react';
import * as T from './types';
import * as S from './styles';
import Label from '../Label';

const Input: React.ForwardRefRenderFunction<HTMLInputElement, T.InputProps> = (
  props,
  ref
) => {
  const {
    name,
    value,
    placeholder,
    label,
    type,
    autoComplete,
    length,
    onChange,
  } = props;

  return (
    <S.Container>
      {label && <Label text={label} />}

      <S.Input
        autoComplete={autoComplete}
        type={type}
        name={name}
        maxLength={length}
        value={value}
        onChange={onChange}
        ref={ref}
        placeholder={placeholder}
      />
    </S.Container>
  );
};

export default React.forwardRef<HTMLInputElement, T.InputProps>(Input);
