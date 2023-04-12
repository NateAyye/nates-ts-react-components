export type CustomTypeProps = 'default' | 'noir' | 'shadow' | 'toggle';

export interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string;
  preview?: string | undefined;
  type?: React.HTMLInputTypeAttribute | CustomTypeProps | undefined;
  labelProps?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;
  radi?: string;
}

export interface InputContainerProps {
  radi?: string;
  type?: string;
}
