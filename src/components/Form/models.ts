import React, { CSSProperties } from 'react';
import { IInputProps } from '../Input/models';

type CustomFormTypeProps = '$default' | '$noir';


export interface FormContainerProps {
  children?: React.ReactElement | React.ReactElement[];
}
export interface FormProps {
  title?: string;
  self?: boolean;
  inputs: IInputProps[];
  element?: React.ReactElement | React.ReactElement[] | undefined;
}
