import React, { useState } from 'react';
import * as S from './Input.styled';
import { InputProps } from './models';

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
export const Input: React.FC<InputProps> = ({
  label,
  id,
  labelProps,
  labelPlaceholder,
  placeholder,
  fw,
  type,
  clearable,
  color,
  onChange,
  onKeyDown,
  value: inputVal,
  ...props
}) => {
  const [value, setValue] = useState(inputVal || '');
  const sProps = { color, labelPlaceholder, fw, type, clearable };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) onKeyDown(e);
    switch (e.code) {
      case 'Escape':
        setValue('');
        break;
      default:
        break;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    setValue(e.target.value);
  };

  return (
    <S.InputContainer {...sProps}>
      {label ? <S.InputLabel>{label}</S.InputLabel> : null}
      {labelPlaceholder ? (
        <S.LabelPlaceholder>{labelPlaceholder}</S.LabelPlaceholder>
      ) : null}
      <S.PropsInput
        id={id ? id.toString() : ''}
        type={type}
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        autoComplete={'off'}
        placeholder={labelPlaceholder ? ' ' : placeholder}
        labelPlaceholder={labelPlaceholder}
        {...props}
      />
      {clearable && value !== '' ? (
        <S.ClearButton2 onClick={() => setValue('')}>&times;</S.ClearButton2>
      ) : null}
    </S.InputContainer>
  );
};
