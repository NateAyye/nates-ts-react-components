export type CustomTypeProps = 'default' | 'noir' | 'shadow' | 'toggle';

export interface InputWithLabel {
  id: string | number;
  label: string;
  labelProps?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;
  placeholder?: string | undefined;
  labelPlaceholder?: never;
}

export interface InputNoLabel {
  id?: string | number | undefined;
  label?: false;
  labelProps?: false;
  labelPlaceholder?: string;
  placeholder?: false;
}

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'id' | 'autoComplete'
> & {
  type?: React.HTMLInputTypeAttribute | CustomTypeProps | undefined;
  fw?: string;
  clearable?: boolean;
  flat?: boolean;
} & (InputNoLabel | InputWithLabel);
