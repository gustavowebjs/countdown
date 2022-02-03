import { ReactElement, useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { ReactComponent as Light } from '../../assets/svgs/light.svg';
import { ReactComponent as Dark } from '../../assets/svgs/dark.svg';
import * as S from './styles';

const ThemeSwitcher = (): ReactElement => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.Container>
      <Dark />
      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={theme.colors.secondary}
        onColor={theme.colors.primary}
      />
      <Light />
    </S.Container>
  );
};

export default ThemeSwitcher;
