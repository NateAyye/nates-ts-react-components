import React from 'react';
import { InputProps } from '../Input/models';

type CustomFormTypeProps = '$default' | '$noir';

export interface FormContainerProps {
  children?: React.ReactElement | React.ReactElement[];
}
export interface FormProps {
  title?: string;
  self?: boolean;
  children?: React.ReactNode | React.ReactNode[] | undefined;
  inputs: InputProps[];
  element?: React.ReactElement | React.ReactElement[] | undefined;
}
