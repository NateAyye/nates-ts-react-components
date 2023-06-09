import React, { useRef } from 'react';
import { createRipple } from '../utils/animations';
import { NatesButtonContent, NatesStyledButton } from './Button.styled';
import { NatesButtonProps } from './models';

/**
 * This Component is a Dynamic Button Component Built in Typescript.
 * @summary
 * Styles Can Be overridden but if you really want to change the look of it Id recoment looking into the docs of the library.
 * it might just have an easier way to do what you want.
 *
 * {@link https://github.com/NateAyye/nates-ts-react-components GithubRepo/wTutorial}
 *
 * @param radi Can accept any valid CSS border-radius value
 * @param z The Z-index of the button
 * @param ripple Adding this will turn off the default ripple that comes with the Button
 * @param ghost Adding this attribute will turn the buttons background-color transparent and give it a border with the same color as the color attribute( ripple effect will also be this color)
 *
 * @returns Custom Input Component that is a container containing a <labal> and an <input>
 *
 * @default
 * radi = '.5rem'
 */
export const Button: React.FC<NatesButtonProps> = ({
  children,
  onMouseDown,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  // prettier-ignore
  const { ripple, ghost, z, color, size, disabled, rounded, flat } = props;
  // prettier-ignore
  const styledProps = { ripple, ghost, z, color, size, disabled, rounded, flat };

  function handleMouseDown(e: React.MouseEvent<HTMLButtonElement>) {
    if (onMouseDown) onMouseDown(e);
    if (!ripple) createRipple(e, buttonRef);
  }
  return (
    <NatesStyledButton
      aria-disabled={disabled}
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      {...props}
    >
      <NatesButtonContent {...styledProps}>{children}</NatesButtonContent>
    </NatesStyledButton>
  );
};
