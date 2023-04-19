import React from 'react';
import styled from 'styled-components';

interface StackProps {
  children?: React.ReactNode | React.ReactNode[];
  horizontal?: boolean;
  gap?: number;
}

export const Stack: React.FC<StackProps> = ({ children, ...props }) => {
  return <StyledStack {...props}>{children}</StyledStack>;
};

const StyledStack = styled.div<StackProps>(({ horizontal, gap }) => ({
  display: 'flex',
  flexDirection: horizontal ? 'column' : 'row',
  gap: gap ? gap / 2 + 'rem' : 0,
  alignItems: horizontal ? '' : 'center',
}));
