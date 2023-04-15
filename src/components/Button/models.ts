import { FontSizeKeys, ZIndicesKeys } from "../../themes";

export interface NatesButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'placeholder'> {
  children?: React.ReactNode | React.ReactNode[];
  ripple?: boolean;
  size?: FontSizeKeys;
  radi?: string;
  z?: ZIndicesKeys;
  ghost?: boolean;
}