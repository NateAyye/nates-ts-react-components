import React from 'react';
import styled from 'styled-components';
import { IInputProps } from './models';

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
export const Input: React.FC<IInputProps> = ({ ...props }) => {
  const { id, preview, type, radi, labelProps, ...rest } = props;

  return (
    <InputContainer type={type} radi={radi}>
      {type !== 'submit' ? (
        <label htmlFor={id} {...labelProps}>
          {preview}
        </label>
      ) : null}
      <input type={type} id={id} placeholder=" " {...rest}></input>
    </InputContainer>
  );
};

const InputContainer = styled.div<Omit<IInputProps, 'id' | 'preview'>>`
  display: flex;
  line-height: 1.25;
  flex-direction: column;
  position: relative;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: ${(props) => props.fw || '500'};

  & input {
    position: relative;
    font-size: 14px;
    border: 1px solid black;
    background: #cccccc99;
    margin-top: calc(
      1lh + ${(props) => props?.theme.theme.space.sm || '.25rem / 2'}
    );
    padding: ${({ theme: { theme } }) =>
      theme ? `calc(${theme.space.sm} / 2) ${theme.space.sm}` : '.25em .5em'};
    padding-left: 1.5rem;
    border-radius: ${(props) => props.radi || '.25rem'};
    box-shadow: 0 0 0px 0 #589eccca;

    transition: box-shadow 200ms ease-in;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0.25lh;
    left: 50%;
    height: 0.1ex;
    width: 80%;
    background-color: black;
    transform: translateX(-50%);
  }

  input:focus-within {
    border: 1px solid black;
    outline: 2px solid black;
    outline-offset: -2px;

    box-shadow: 0 0 1px 2px #589eccca;
  }

  input:not(:placeholder-shown) {
    background: #cccccc99;
  }

  &:has(input:not(:placeholder-shown)) label {
    font-size: 16px;
    top: calc(${(props) => props?.theme.theme.space.sm || `.25rem`} / 2);
    left: 0.5rem;
    color: ${(props) => props.theme.theme.colors.foreground || 'black'};
  }

  & label {
    font-size: 14px;
    color: #444;
    position: absolute;
    pointer-events: none;
    top: calc(1.25lh + ${(props) => props?.theme.theme.space.sm || '.25rem'});
    left: calc(
      ${({ theme: { theme } }) => (theme ? theme.space.sm : '.25em .5em')} +
        0.2ex + 0.75rem
    );

    transition: all 200ms ease-in;
  }
`;
