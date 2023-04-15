import React, { useState} from 'react';
import { Select, SelectOption } from '../components';

interface SelectPageProps {}


const options = [
  { label: 'first', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

export const SelectPage: React.FC<SelectPageProps> = ({}) => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <div>
      <h1>Select Page</h1>
            <Select
        multiple
        value={value1}
        options={options}
        onChange={(o) => {
          setValue1(o);
        }}
      /> 
       <br />
        <Select
          value={value2}
          options={options}
          onChange={(o) => {
            setValue2(o);
          }}
        /> 
    </div>
  );
};
