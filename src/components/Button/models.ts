import { CSSProperties } from 'styled-components';
import { FontSizeKeys, ThemeColorKeys, ZIndicesKeys } from '../../themes';

export interface NatesButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'placeholder'> {
  children?: React.ReactNode | React.ReactNode[];
  ripple?: boolean;
  size?: FontSizeKeys;
  radi?: string;
  disabled?: boolean;
  rounded?: boolean;
  color?: ThemeColorKeys | CSSProperties['color'];
  z?: ZIndicesKeys;
  ghost?: boolean;
}
