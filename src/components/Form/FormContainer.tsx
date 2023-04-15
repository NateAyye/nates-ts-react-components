import React from 'react';
import { FormContainerProps } from './models';

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
};
