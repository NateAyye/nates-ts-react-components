import React from 'react';
import styled from 'styled-components';

interface GroupProps {
  count?: number;
  children?: React.ReactNode | React.ReactNode[];
}

export const Group: React.FC<GroupProps> = ({ children, ...props }) => {
  return <SGroup>{children}</SGroup>;
};

const SGroup = styled.div<GroupProps>`
  
`;
