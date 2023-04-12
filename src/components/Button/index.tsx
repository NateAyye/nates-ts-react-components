import React, { useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ButtonProps } from './models';

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
 * @param labelProps? If you'd like to add attributes to the label specificly you can do that all within this prop
 *
 * @returns Custom Input Component that is a container containing a <labal> and an <input>
 *
 * @default
 * radi = '.5rem'
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  let rippleX: number = 0;
  let rippleY: number = 0;

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (onClick) onClick(e);
    console.log(e.currentTarget.offsetTop);
    rippleX = e.clientX - e.currentTarget.offsetLeft;
    rippleY = e.clientY - e.currentTarget.offsetTop;

    const span = document.createElement('span');

    span.style.top = rippleY + 'px';
    span.style.left = rippleX + 'px';
    // span.style.color = 'currentColor';
    span.style.filter = 'invert(1) grayscale(1) brightness(1)';

    buttonRef.current?.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 500);

    console.log(rippleX, rippleY);
  };

  return (
    <NatesButton ref={buttonRef} onClick={handleButtonClick} {...props}>
      {children}
      {!props.noIcon ? props.icon : null}
    </NatesButton>
  );
};

const ripple = keyframes`
  0% {
    width: 0;
    opacity: 0.2;
  }
  100% {
    width: 300%;
    opacity: 0;
  }
`;
const buttonError = css`
  background: #da6262;

  ::after {
    content: '❗';
    filter: drop-shadow(0 0 2px #f1f3de);
  }
`;

const NatesButton = styled.button<ButtonProps>`
  position: relative;
  font-size: 1.1em;
  font-weight: 600;
  padding: 0.25em 0.75em;

  contain: paint;

  border: none;
  border-radius: ${(props) => props.radi || '.5rem'};

  background-color: #0072f5;
  color: whitesmoke;

  cursor: pointer;

  ${(props) => (props.error ? buttonError : null)}

  @keyframes ripple {
  }
  span {
    position: absolute;

    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    pointer-events: none;
    border-radius: 50%;
    z-index: 200;
    background: white;
    animation: ${ripple} 500ms linear infinite;
  }
`;
