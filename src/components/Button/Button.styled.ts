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

export const ButtonContent = styled.div<ButtonProps>`
  display: inline;
  position: relative;
  pointer-events: none;
  z-index: 100;
  margin: 0;
  padding: 0;
  color: ${({ color, ghost, theme: { colors } }) =>
    ghost ? colors[color || 'white'] : 'whitesmoke'};
`;

export const ErrorIcon = styled.strong`
  letter-spacing: -0.5rem;
  filter: drop-shadow(0 0 2px #f1f3de);
`;

export const NatesButton = styled.button<ButtonProps>`
  position: relative;
  z-index: ${({ z, theme }) => (z ? theme.zIndices[z] : '')};
  isolation: isolate;

  font-size: ${({ theme, size }) => theme.fontSizes[size || 'md'] || '1rem'};
  font-weight: 600;
  padding: calc(${({ theme, size }) => theme.space[size || 'md']} / 3)
    calc(${({ theme, size }) => theme.space[size || 'md']} * 2);
  cursor: pointer;
  contain: paint;
  border: ${({ ghost, color, theme: { colors } }) =>
    ghost ? `2px solid ${colors[color || 'primary']}` : 'none'};
  border-radius: ${({ radi }) => radi || '.5rem'};
  background-color: ${({ color, ghost, theme: { colors } }) =>
    ghost ? 'transparent' : color ? colors[color] || color : '#1a75f1'};

  span {
    position: absolute;
    z-index: 50;
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${({ color, ghost, theme: { colors } }) =>
      ghost ? colors[color || 'white'] : 'whitesmoke'};

    pointer-events: none;

    transform: translate(-50%, -50%);

    animation: ${ripple} 500ms linear infinite;
  }
`;
