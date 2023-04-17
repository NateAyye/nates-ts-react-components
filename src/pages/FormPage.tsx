import React from 'react';
import { FormContainerProps, FormProps } from '../components';
import { Form } from '../components/Form';

interface FormPageProps {}

const inputs: Pick<FormProps, 'inputs'> = {
  inputs: [
    {
      id: 'name',
      labelPlaceholder: 'Name: ',
      type: 'text',
    },
    {
      id: 'email',
      labelPlaceholder: 'Email: ',
      type: 'email',
    },
    {
      id: 'password',
      labelPlaceholder: 'Password: ',
      type: 'password',
    },
    {
      id: 'confirm-password',
      labelPlaceholder: 'Confirm Password: ',
      type: 'confirm-password',
    },
  ],
};

export const FormPage: React.FC<FormPageProps> = ({}) => {
  return (
    <Form.Container>
      <h1>Form Page</h1>
      <Form self title="Register" inputs={inputs.inputs} />
    </Form.Container>
  );
};
