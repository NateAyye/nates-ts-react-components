import React from 'react';
import styled, { css } from 'styled-components';
import { IInputProps, InputContainerProps } from './models';

/**
 * This Component is a Dynamic Input Component Built in Typescript.
 * @summary It already includes a label and input within it and you can
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
export const Input: React.FC<IInputProps> = ({
  id,
  preview,
  type = 'text',
  radi,
  labelProps,
  ...props
}) => {
  const name: string = 'Nathan';
  console.log(
    name.toLowerCase(),
    name.split('').reverse().join('').toLowerCase(),
  );

  return (
    <InputContainer type={type} radi={radi}>
      {type !== 'submit' ? (
        <label htmlFor={id} {...labelProps}>
          {preview}
        </label>
      ) : null}
      <input type={type} id={id} placeholder=" " {...props}></input>
    </InputContainer>
  );
};

const CheckBoxStyles = css``;

const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  & input {
    margin-top: 1lh;
    border: 1px solid black;
    border-radius: ${(props) => props.radi || '.25rem'};
  }

  &:has(input:not(:placeholder-shown)) label {
  }

  & label {
    position: absolute;
    pointer-events: none;
  }
`;
