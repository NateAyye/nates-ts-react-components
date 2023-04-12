import React from 'react';
import { Input } from '../Input';
import { FormProps } from './models';

const defaultProps: FormProps = {
  title: 'Form',
  inputs: [
    {
      id: '1',
      name: 'email',
      type: 'email',
      preview: 'Email: ',
    },
    {
      id: '2',
      name: 'username',
      type: 'text',
      preview: 'Username: ',
    },
    {
      id: '3',
      name: 'password',
      type: 'password',
      preview: 'Password: ',
    },
  ],
  self: true,
};

export const Form: React.FC<FormProps> = ({
  inputs = defaultProps.inputs,
  self = defaultProps.self,
  title = defaultProps.title,
  element,
}) => {
  return (
    <form>
      {self ? <h1>{title}</h1> : <h4>{title}</h4>}
      {inputs.map((input) => {
        return element ?? <Input key={input.id} {...input} />;
      })}
    </form>
  );
};
