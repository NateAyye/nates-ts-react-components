export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
  error?: boolean;
}

export interface NatesButtonProps {
  error?: boolean;
}
