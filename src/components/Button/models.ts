import { CSSProperties } from 'styled-components';
import { FontSizeKeys, ZIndicesKeys } from '../../themes';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
  radi?: string;
  icon?: string;
  noIcon?: boolean;
  errorIcon?: string;
  ripple?: boolean;
  size?: FontSizeKeys;
  ghost?: boolean;
  z?: ZIndicesKeys;
  fg?: CSSProperties['color'];
  /** Will Change the style a little bit and display an error icon if you don't want an Icon set the errorIcon */
  error?: boolean;
}
