import React from 'react';
import styled from 'styled-components';
import { Input } from '../Input';
import { InputProps } from '../Input/models';
import { FormContainer } from './FormContainer';
import { FormContainerProps, FormProps } from './models';

type FormComp = React.FunctionComponent<FormProps> & {
  Container: React.FC<FormContainerProps>;
  Input: React.FC<InputProps>;
};

/**
 * React Form Component that will take an array of inputs and map over them and render then dynamiclly
 * Will soon create the form data prepare function to pass it to the end user
 *
 * @borrows Input
 * @param inputs An Array of inputs: { id, preview, type: , radi: css border-radius, labelProps:HTMLLabelAttributes<HTMLLabelElement> , ...rest: HTMLInputAttributes<HTMLInputElement> }
 * @param self : boolean Set this so that it knows its the only element on the page (Will use an <h1>{title}</h1> if self is true)
 * @param title : string Set the title of the form in the top will be either <h1> or <p> depending on the self props
 * @param element : React.ReactElement | React.ReactElement[] | undefined. you can input this into the element slot to define your own inputs
 *
 * @todo Create Prepare Form Function
 * @todo Create Form Fields (Select, Options, Radio, RadioGroup, Checkbox) - Accessed through dot notation <Form.Select></>
 */
export const Form: FormComp = ({ inputs, self, title, element, children }) => {
  return (
    <SForm>
      {self ? <h1>{title}</h1> : <h4>{title}</h4>}
      {inputs.map((input) => {
        return element ?? <Input key={input.id} {...input} />;
      })}
      {children ?? null}
    </SForm>
  );
};

const SForm = styled.form`
  text-align: center;
  border: 1px solid red;
  padding: 1.5em;
`;

Form.Container = FormContainer;
Form.Input = Input;
