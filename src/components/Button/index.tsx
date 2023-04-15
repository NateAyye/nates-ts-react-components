import React, { useRef } from 'react';
import { ButtonContent, ErrorIcon, NatesButton } from './Button.styled';
import { ButtonProps } from './models';

const createRipple = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  buttonRef: React.RefObject<HTMLButtonElement>,
) => {
  const span = document.createElement('span');

  span.style.top = e.clientY - e.currentTarget.offsetTop + 'px';
  span.style.left = e.clientX - e.currentTarget.offsetLeft + 'px';

  buttonRef.current?.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 500);
};

/**
 * This Component is a Dynamic Button Component Built in Typescript.
 * @summary
 * Styles Can Be overridden but if you really want to change the look of it Id recoment looking into the docs of the library.
 * it might just have an easier way to do what you want.
 *
 *
 * -- type='text' caviate
 * - placholder attribute is purposefully set to an single space so that we can get the effect we achieve
 *
 * {@link https://github.com/NateAyye/nates-ts-react-components GithubRepo/wTutorial}
 *
 * @param id Will add the htmlFor on the label and will also add the id to the input
 * @param radi Can accept any valid CSS border-radius value
 * @param type
 * @param z The Z-index of the button
 * @param error Will change the style a lil bit and add an icon (Icon can be turned off with the errorIcon)
 * @param labelProps? If you'd like to add attributes to the label specificly you can do that all within this prop
 *
 * @returns Custom Input Component that is a container containing a <labal> and an <input>
 *
 * @default
 * radi = '.5rem'
 */
export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  const { radi, icon, noIcon, errorIcon, ripple, size, z, ghost } = props;
  const styledProps = {
    radi,
    icon,
    noIcon,
    errorIcon,
    ripple,
    size,
    z,
    ghost,
  };
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (onClick) onClick(e);
    if (!ripple) {
      createRipple(e, buttonRef);
    }
  };

  return (
    <NatesButton
      ref={buttonRef}
      onClick={handleButtonClick}
      {...styledProps}
      {...props}
    >
      <ButtonContent color={props.color} {...styledProps}>
        {children}
      </ButtonContent>
      <ErrorIcon {...styledProps}>{noIcon ? null : icon}</ErrorIcon>
    </NatesButton>
  );
};
