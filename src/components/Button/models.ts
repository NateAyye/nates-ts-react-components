

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
  radi?: string;
  icon?: string;
  noIcon?: boolean;
  errorIcon?: string; 
  /** Will Change the style a little bit and display an error icon if you don't want an Icon set the errorIcon */
  error?: boolean;
  sColor?: string;
}
