import styled from 'styled-components';
import { InputProps } from './models';

const inputPadding = '.2rem';
const topPadding = '.3rem';
const inputLH = '1.4';
const inputSidePadding = '1rem';

export const ClearButton2 = styled.span(
  ({ theme: { fontWeights, fontSizes, zIndices, colors } }) => ({
    position: 'absolute',
    cursor: 'pointer',
    bottom: '0.3lh',
    right: `calc(${inputSidePadding} * .7)`,
    fontWeight: fontWeights.medium || '500',
    fontSize: fontSizes.lg || '18px',
    zIndex: zIndices.max || '500',
    color: colors['gray800'] || '#999',

    ':hover': {
      color: colors.red600 || '#944',
    },
  }),
);

export const LabelPlaceholder = styled.label(
  ({ theme: { colors, fontWeights, fontSizes, zIndices } }) => ({
    position: 'absolute',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    fontSize: 'inherit',
    fontWeight: fontWeights.bolder || '500',
    color: '#eeeeeeaa',
    zIndex: zIndices['3'] || 100,
    top: `calc(1lh + ${inputPadding} + ${inputPadding} * 3)`,
    left: `calc(${inputSidePadding} + .25rem)`,
    transition: 'all 200ms ease-in',

    ':has(+ input:not(:placeholder-shown))': {
      color: colors['gray100'],
      fontSize: fontSizes['lg'],
      top: `calc(${inputPadding} * 2)`,
      left: `calc(${inputSidePadding})`,
    },
  }),
);

export const InputLabel = styled.label(({ theme: { fontSizes } }) => ({
  position: 'relative',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
  fontSize: fontSizes.lg || '18px',
  fontWeight: 'inherit',
  marginLeft: `calc(${inputSidePadding} / 2)`,
}));

export const InputContainer = styled.div<
  Pick<InputProps, 'labelPlaceholder' | 'fw'>
>(({ fw, theme: { fonts, fontSizes, fontWeights, space } }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: space[56] || '15rem',
  fontFamily: fonts.sans || "'Segue UI', sans-serif",
  fontWeight: fw ? fw : fontWeights.semibold || '600',
  fontSize: fontSizes.md || '18px',
  lineHeight: inputLH,
  padding: inputPadding,
}));

export const PropsInput = styled.input<
  Pick<InputProps, 'flat' | 'color' | 'labelPlaceholder'>
>(({ labelPlaceholder, color, flat, theme: { colors, radii } }) => ({
  position: 'relative',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: 'inherit',
  alignSelf: 'stretch',
  padding: `${topPadding} ${inputSidePadding}`,
  marginTop: labelPlaceholder ? `calc(${topPadding} + 1lh)` : '',
  border: '2px solid' + !flat ? colors.gray400 : '#777',
  borderRadius: radii.sm || '10px',
  color: colors.backgroundAlpha || '#eeeeeeee',
  backgroundColor: !flat ? colors.gray400 : '#777',
  boxShadow: '0 0 0px 0' + colors[color ?? 'gray600'] || '#589ecc',
  transition: 'box-shadow 200ms ease-in',

  ':focus-within': {
    outline: '2px solid' + !flat ? colors.gray400 : '#777',
    outlineOffset: '-3px',
    boxShadow: '0 0 1px 2px' + colors[color ?? 'blue800'] + '99' || '#589ecc',
  },
}));
