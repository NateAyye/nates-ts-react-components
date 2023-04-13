import React from 'react';
import { Input } from '../Input';
import { FormProps } from './models';

export const Form: React.FC<FormProps> = ({ inputs, self, title, element }) => {
  return (
    <form>
      {self ? <h1>{title}</h1> : <h4>{title}</h4>}
      {inputs.map((input) => {
        return element ?? <Input key={input.id} {...input} />;
      })}
    </form>
  );
};
