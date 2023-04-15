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
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { ripple, ghost, z, color, size } = props;
  const styledProps = { ripple, ghost, z, color, size };

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e);
    if (!ripple) createRipple(e, buttonRef);
  }
  return (
    <NatesStyledButton ref={buttonRef} onClick={handleOnClick} {...props}>
      <NatesButtonContent {...styledProps}>{children}</NatesButtonContent>
    </NatesStyledButton>
  );
};
