import React from 'react';
import { FormContainerProps, FormProps } from '../components';
import { Form } from '../components/Form';

interface FormPageProps {}

const inputs: Pick<FormProps, 'inputs'> = {
  inputs: [
    {
      id: 'name',
      preview: 'Name: ',
      type: 'text',
    },
    {
      id: 'email',
      preview: 'Email: ',
      type: 'email',
    },
    {
      id: 'password',
      preview: 'Password: ',
      type: 'password',
    },
    {
      id: 'confirm-password',
      preview: 'Confirm Password: ',
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
