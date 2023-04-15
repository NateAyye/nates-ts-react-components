import React, { InputHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';

export type CustomTypeProps = 'default' | 'noir' | 'shadow' | 'toggle';

interface InputWithLabel {
  id: string | number;
  label: string;
  labelProps?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;
  placeholder?: string | undefined;
  labelPlaceholder?: never;
}

interface InputNoLabel {
  id?: string | number | undefined;
  label?: false;
  labelProps?: never;
  labelPlaceholder?: string;
  placeholder?: never;
}

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'id' | 'autoComplete'
> & {
  type?: React.HTMLInputTypeAttribute | CustomTypeProps | undefined;
  fw?: string;
  clearable?: boolean;
  flat?: boolean;
} & (InputNoLabel | InputWithLabel);

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
  const sProps = { color, labelPlaceholder, fw };

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
    <InputContainer {...sProps}>
      {label ? <InputLabel>{label}</InputLabel> : null}
      {labelPlaceholder ? (
        <LabelPlaceholder>{labelPlaceholder}</LabelPlaceholder>
      ) : null}
      <PropsInput
        id={id ? id.toString() : ''}
        type={type}
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        autoComplete={'off'}
        placeholder={labelPlaceholder ? ' ' : placeholder}
        {...props}
      />
      {clearable && value !== '' ? (
        <ClearButton2 onClick={() => setValue('')}>&times;</ClearButton2>
      ) : null}
    </InputContainer>
  );
};

const inputPadding = '.2rem';
const topPadding = '.3rem';
const inputLH = '1.4';
const inputSidePadding = '1rem';

const ClearButton2 = styled.span(
  ({ theme: { fontWeights, fontSizes, zIndices, colors } }) => ({
    position: 'absolute',

    fontWeight: fontWeights.medium || '500',
    fontSize: fontSizes.lg || '18px',

    cursor: 'pointer',
    zIndex: zIndices.max || '500',
    right: `calc(${inputSidePadding} * .7)`,
    bottom: '0.3lh',
    color: colors['gray800'] || '#999',

    ':hover': {
      color: colors.red600 || '#944',
    },
  }),
);

const LabelPlaceholder = styled.label(({ theme: { colors, fontWeights } }) => ({
  position: 'absolute',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
  fontSize: 'inherit',
  fontWeight: fontWeights.bolder || '500',
}));

const InputLabel = styled.label(
  ({ theme: { colors, fontWeights, fontSizes } }) => ({
    position: 'relative',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    fontSize: fontSizes.lg || '18px',
    fontWeight: 'inherit',
    marginLeft: `calc(${inputSidePadding} / 2)`,
  }),
);

const InputContainer = styled.div<Pick<InputProps, 'labelPlaceholder' | 'fw'>>(
  ({
    labelPlaceholder,
    fw,
    theme: { colors, fonts, fontSizes, fontWeights, space, radii },
  }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: space[56] || '15rem',
    fontFamily: fonts.sans || "'Segue UI', sans-serif",
    fontWeight: fw ? fw : fontWeights.semibold || '600',
    fontSize: fontSizes.md || '18px',
    lineHeight: inputLH,
    padding: inputPadding,
  }),
);

const PropsInput = styled.input<Pick<InputProps, 'flat' | 'color'>>(
  ({
    color,
    flat,
    theme: { colors, fontSizes, fontWeights, space, radii, borderStyles },
  }) => ({
    position: 'relative',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    padding: `${topPadding} ${inputSidePadding}`,
    // marginTop: `calc(${topPadding} + 1lh)`,
    border: '2px solid' + !flat ? colors.gray400 : '#777',
    borderRadius: radii.sm || '10px',
    backgroundColor: !flat ? colors.gray400 : '#777',
    color: colors.backgroundAlpha || '#eeeeeeee',
    fontWeight: 'inherit',
    alignSelf: 'stretch',

    boxShadow: '0 0 0px 0' + colors[color ?? 'gray600'] || '#589ecc',

    transition: 'box-shadow 200ms ease-in',

    ':focus-within': {
      outline: '2px solid' + !flat ? colors.gray400 : '#777',
      outlineOffset: '-3px',
      boxShadow: '0 0 1px 2px' + colors[color ?? 'blue800'] + '99' || '#589ecc',
    },
  }),
);

const SInput = styled.input`
  position: relative;
  font-size: 18px;
  line-height: 1.8;
  padding: 0 0.5rem;
  margin: 0.2rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  background-color: #555;
  color: #eeeeeeee;
`;

const ClearButton = styled.span`
  position: absolute;
  font-weight: ${({ theme }) => theme.fontWeights.medium || '500'};
  font-size: ${({ theme }) => theme.fontSizes.lg || '18px'};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndices.max || '500'};
  right: 0.3lh;
  bottom: 0.3lh;
  color: ${({ theme }) => theme.colors['gray500'] || '#777'};

  :hover {
    color: ${({ theme }) => theme.colors.red600 || '#944'};
  }
`;

const InputContain = styled.div<Pick<InputProps, 'labelPlaceholder' | 'fw'>>`
  display: flex;
  max-width: 20rem;
  line-height: 1.25;
  flex-direction: column;
  position: relative;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: ${(props) => props.fw || '500'};

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.3lh;
    height: 0.1ex;
    width: 80%;
    background-color: black;
    transform: translateX(-50%);
  }
  ${({ labelPlaceholder }) => (labelPlaceholder ? labelPlaceHolderStyles : '')}
  & input {
    position: relative;
    font-size: 14px;
    border: 1px solid black;
    background: #cccccc99;
    margin-top: calc(1lh + ${({ theme }) => theme.space.sm || '.25rem / 2'});
    padding: ${({ theme }) =>
      theme ? `calc(${theme.space.sm} / 2) ${theme.space.sm}` : '.25em .5em'};
    padding-left: ${({ theme }) =>
      theme ? `calc(${theme.space.sm} * 3)` : '.25em .5em'};
    border-radius: ${({ theme }) => theme.radii.xs || '.25rem'};
    box-shadow: 0 0 0px 0 #589eccca;

    transition: box-shadow 200ms ease-in;
  }

  input:focus-within {
    border: 1px solid black;
    outline: 2px solid black;
    outline-offset: -2px;

    box-shadow: 0 0 1px 2px #589eccca;
  }
`;

const labelPlaceHolderStyles = css`
  input:not(:placeholder-shown) {
    background: #cccccc99;
  }

  &:has(input:not(:placeholder-shown)) label {
    font-size: 16px;
    top: calc(${({ theme }) => theme.space.sm || `.25rem`} / 2);
    left: 0.5rem;
    color: ${({ theme }) => theme.colors.foreground || 'black'};
  }

  & label {
    font-size: 14px;
    color: #444;
    position: absolute;
    pointer-events: none;
    top: calc(1.25lh + ${({ theme }) => theme.space.sm || '.25rem'});
    left: calc(
      ${({ theme }) => (theme ? `calc(${theme.space.sm} * 2)` : '.25em .5em')} +
        0.2ex + 0.75rem
    );

    transition: all 200ms ease-in;
  }
`;
