import styled, { keyframes } from 'styled-components';
import { ButtonProps } from './models';

const ripple = keyframes`
  0% {
    width: 0;
    opacity: .3;
  }
  100% {
    width: 400%;
    opacity: 0;
  }
`;

export const ButtonContent = styled.div`
  display: inline;
  position: relative;
  pointer-events: none;
  z-index: 100;
  margin: 0;
  padding: 0;
  filter: invert(100%) grayscale(100%) brightness(4);
`;

export const ErrorIcon = styled.strong`
  letter-spacing: -0.5rem;
  filter: drop-shadow(0 0 2px #f1f3de);
`;

export const NatesButton = styled.button<ButtonProps>`
  position: relative;

  font-size: ${(props) => props.theme.theme.fontSizes[props.size || 'md']};
  font-weight: 600;
  padding: calc(${(props) => props.theme.theme.space[props.size || 'md']} / 2)
    calc(${(props) => props.theme.theme.space[props.size || 'md']} * 2);
  cursor: pointer;
  contain: paint;
  border: none;
  border-radius: ${({ radi }) => radi || '.5rem'};
  color: ${({ sColor }) => sColor || 'white'};
  background-color: ${(props) =>
    props.sColor
      ? props.sColor
      : props.error
      ? props.theme.theme.colors.error
      : props.theme.theme.colors.primary};

  span {
    position: absolute;

    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    pointer-events: none;
    border-radius: 50%;
    z-index: 50;
    background: ${({ sColor }) => sColor || 'white'};
    filter: invert(100%) grayscale(100%) brightness(100%) saturate(1);
    animation: ${ripple} 500ms linear infinite;
  }
`;