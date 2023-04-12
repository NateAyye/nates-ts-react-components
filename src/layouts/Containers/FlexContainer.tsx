import React from 'react';
import { FlexContainerProps } from './models';

/**
 *  An All Purpose Flex Container with functionality for all your needs, Props explained below
 * @param fc FullScreen Option that will give the element a height of '100vh'
 * @param fg Foreground change the base text color of your container
 * @param bg Background change the base color of your container
 * @param centered center your items within the container (Equivilent to align-items: center, justify-content: center)
 * @param radi Accepts any css borderRadius value
 * @param align-i The same as the css property alignItems
 * @returns
 */
export const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  fc,
  bg,
  fg,
  centered,
  style,
  radi,
  'align-i': alignI,
  ...props
}) => {
  return (
    <div
      style={{
        display: 'flex',
        borderRadius: radi ?? style?.borderRadius,
        backgroundColor: bg ?? style?.backgroundColor,
        color: fg ?? style?.color,
        alignItems: alignI || centered ? 'center' : style?.alignItems,
        justifyContent: centered ? 'center' : style?.justifyContent,
        height: fc ? '100vh' : style?.height,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
