import React from 'react';
import { Button } from '../components/Button';

interface ButtonPageProps {}

export const ButtonPage: React.FC<ButtonPageProps> = ({}) => {
  function handleMouseClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    console.log(e);
  }

  return (
    <div>
      <h1>My Button Component</h1>
      <Button size="sm" onClick={handleMouseClick}>
        Hello
      </Button>
      <Button>Default</Button>
      <Button size="lg">Default</Button>
      <Button size="xl">Default</Button>
      <Button size="2xl">Default</Button>
      <br />
      <Button color="secondary" size="sm" onClick={handleMouseClick}>
        Hello
      </Button>
      <Button color="secondary">Default</Button>
      <Button color="secondary" size="lg">
        Default
      </Button>
      <Button color="secondary" size="xl">
        Default
      </Button>
      <Button color="secondary" size="2xl">
        Default
      </Button>
      <br />
      <Button ghost color="secondary" size="sm" onClick={handleMouseClick}>
        Hello
      </Button>
      <Button ghost color="secondary">
        Default
      </Button>
      <Button ghost color="secondary" size="lg">
        Default
      </Button>
      <Button ghost color="secondary" size="xl">
        Default
      </Button>
      <Button ghost color="secondary" size="2xl">
        Default
      </Button>
    </div>
  );
};
