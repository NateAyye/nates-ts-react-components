export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
  radi?: string;
  icon?: string;
  noIcon?: boolean;
  errorIcon?: string;
  error?: boolean;
  sColor?: string;
}
