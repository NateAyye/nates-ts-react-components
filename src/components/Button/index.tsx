import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps, NatesButtonProps } from './models';

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
