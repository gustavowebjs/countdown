export type ButtonSizes = 'small' | 'medium' | 'large';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  className?: string;
  size?: ButtonSizes;
};
