export type InputProps = {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  length?: number;
};
