import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  const name: string = 'Nathan';

  function handleMouseClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    console.log(e);
  }

  return (
    <div className="App">
      <Button onClick={handleMouseClick}>Hello</Button>
      <Input type="default" id="name" preview="Name: " />
    </div>
  );
}

export default App;
