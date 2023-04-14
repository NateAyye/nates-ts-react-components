import { useState } from 'react';
import { Form, Select, SelectOption } from './components';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { FlexContainer } from './layouts';

const options = [
  { label: 'first', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

function App() {
  function handleMouseClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    console.log(e);
  }

  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <div className="App">
      {/* <FlexContainer centered fc radi={'.25rem'}> */}
      {/* <Button size="lg" onClick={handleMouseClick}>
          Hello
        </Button> */}
      <Input type="default" id="name" preview="Name: " />
      <Select
        multiple
        value={value1}
        options={options}
        onChange={(o) => {
          setValue1(o);
        }}
      />
      {/* <br />
        <Select
          value={value2}
          options={options}
          onChange={(o) => {
            setValue2(o);
          }}
        /> */}
      <Form.Container>
        <Form
          self
          title="Register"
          inputs={[
            {
              id: 'he',
              type: 'text',
              name: 'username',
              preview: 'Username: ',
            },
            {
              id: 'h43',
              type: 'email',
              name: 'email',
              preview: 'Email: ',
            },
            {
              id: 'h5',
              type: 'password',
              name: 'password',
              preview: 'Password: ',
            },
          ]}
        />
      </Form.Container>
      {/* </FlexContainer> */}
    </div>
  );
}

export default App;
