
export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SingleSelectProps {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

export interface MultipleSelectProps {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
}

export type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);
