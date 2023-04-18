import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { ThemeColorKeys, ThemeSizeKeys } from '../../themes';

export interface AvatarProps {
  text?: string;
  alt?: string;
  src?: string;
  icon?: React.ReactNode;
  squared?: boolean;
  round?: boolean;
  size?: ThemeSizeKeys | string;
  color?: ThemeColorKeys | CSSProperties['color'];
  bordered?: boolean;
  textColor?: ThemeColorKeys | CSSProperties['color'];
  zoomed?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
  const { src, alt, text } = props;
  return (
    <SAvatar {...props}>
      {text ? (
        <AvatarText>{text.slice(0, 3)}</AvatarText>
      ) : (
        <AvatarImage alt={alt ?? 'User Avatar'} src={src} {...props} />
      )}
    </SAvatar>
  );
};

const SAvatar = styled.div<AvatarProps>(
  ({
    color,
    squared,
    round,
    size,
    bordered,
    zoomed,
    theme: { colors, sizes, space },
  }) => ({
    display: 'flex',
    contain: 'paint',
    margin: '3px',
    borderRadius: round ? space.screen || '100vh' : space.sm || '14px',
    width: size ? sizes[size] : sizes.base || '40px',
    height: size ? sizes[size] : sizes.base || '40px',
    backgroundColor: color ? colors[color] || color : colors.gray500,
    border: bordered ? '2px solid black' : '',
    outline: bordered
      ? '3px solid' + (color ? colors[color] : 'transparent')
      : '',
    outlineOffset: '-1px',
  }),
);

const AvatarImage = styled.img<AvatarProps>(
  ({
    color,
    squared,
    round,
    size,
    textColor,
    zoomed,
    theme: { colors, sizes },
  }) => ({
    width: 'fill-available',
    objectFit: 'cover',
    transition: 'transform 200ms ease-in',

    ':hover': zoomed
      ? {
          transform: 'scale(1.05)',
        }
      : {},
  }),
);

const AvatarText = styled.p<AvatarProps>(
  ({
    color,
    squared,
    round,
    size,
    textColor,
    zoomed,
    theme: { fonts, colors, sizes, fontWeights },
  }) => ({
    fontFamily: fonts.sans,
    margin: 'auto',
    color: textColor ?? (colors.gray900 || 'gray'),
    fontWeight: fontWeights.bold,
  }),
);
