import { Form } from './components';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { FlexContainer } from './layouts';

function App() {
  function handleMouseClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    console.log(e);
  }

  return (
    <div className="App">
      <FlexContainer centered fc radi={'.25rem'}>
        {/* <Button sColor="yellow" icon="🎉" onClick={handleMouseClick}>
          Hello
        </Button>
        <Input type="default" id="name" preview="Name: " /> */}
        <Form
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
      </FlexContainer>
    </div>
  );
}

export default App;
