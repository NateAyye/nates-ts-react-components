import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps, NatesButtonProps } from './models';

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
 * type = 'text'
 * radi = '.25rem'
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  error = false,
  ...props
}) => {
  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (onClick) onClick(e);
  };

  return (
    <NatesButton onClick={handleButtonClick} {...props}>
      {children}
      <span hidden></span>
    </NatesButton>
  );
};

const buttonError = css`
  background: #da6262;
`;

const NatesButton = styled.button<NatesButtonProps>`
  font-size: 1.1em;
  font-weight: 600;
  padding: 0.25em 0.75em;

  border: none;
  border-radius: 0.3rem;

  background-color: #60a0dd;
  color: whitesmoke;

  cursor: pointer;

  ${(props) => (props.error ? buttonError : null)}
`;
