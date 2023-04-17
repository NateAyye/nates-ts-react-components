import React from 'react';
import styled from 'styled-components';
import { Input } from '../components/Input';

interface InputPageProps {}

export const InputPage: React.FC<InputPageProps> = ({}) => {
  return (
    <InputPageContainer style={{ background: 'gray' }}>
      <h1>Input Page</h1>
      <p>
        This Input is meant to be built on top of the normal html input. I want
        it to be used almost like a normal html input that has extra styling and
        functionallity built in. There will be additional features and
        attributes added for the sake of making everyones day easier. The goal
        is to no need to touch a style sheet once this library is fully
        implemented.
      </p>
      <section>
        <h2>
          For any input with type (email, password, text, search, tel, url)
        </h2>
        <hr />
        <Input
          clearable
          type="email"
          id="name"
          label="Email: "
          placeholder="hello"
        />
        <Input
          
          fw="semibold"
          clearable
          type="email"
          id="email"
          labelPlaceholder="Email"
        />
      </section>
    </InputPageContainer>
  );
};

const InputPageContainer = styled.div`
  section {
    border: 2px solid #777;
    margin: 0 1.5rem;
    padding: 2rem;
    border-radius: 1rem;
  }
`;
