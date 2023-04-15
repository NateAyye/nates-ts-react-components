import styled from 'styled-components';
import { ripple } from '../utils/animations';
import { NatesButtonProps } from './models';

// prettier-ignore
export const NatesStyledButton = styled.button<NatesButtonProps>`
  ${({ color, ghost, z, size, radi, theme: { colors, fontSizes, fontWeights, zIndices, space },
  }) => ({
    position: 'relative',
    zIndex: z ? zIndices[z] || z : '',
    isolation: 'isolate',
    fontSize: fontSizes[size || 'md'] || '1rem',
    fontWeight: 600,
    padding: `calc(${space[size || 'md'] || '1rem'} / 3) calc(${ space[size || 'md'] || '1rem' } * 2)`,
    cursor: 'pointer',
    contain: 'paint',
    border: ghost ? `2px solid ${colors[color || 'primary'] || 'gray'}` : 'none',
    borderRadius: radi || '.5em',
    backgroundColor: ghost ? 'transparent' : color ? colors[color] || color : '#1a75f1',
  })}
  span {
    position: absolute;
    z-index: 50;
    aspect-ratio: 1;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);

    background: ${({ color, ghost, theme: { colors } }) =>
      ghost ? colors[color || 'primary'] : 'whitesmoke'};

    animation: ${ripple} 500ms linear infinite;
  }
`;

export const NatesButtonContent = styled.div<NatesButtonProps>(
  ({ color, ghost, theme: { colors } }) => ({
    display: 'inline',
    position: 'relative',
    pointerEvents: 'none',
    zIndex: 100,
    margin: 0,
    padding: 0,
    color: ghost ? colors[color || 'primary'] : 'whitesmoke',
  }),
);
