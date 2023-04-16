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
      <Button size="3xl">Default</Button>
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
      <Button ghost size="sm" color='secondary' onClick={handleMouseClick}>
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
      <br />
      <Button color="error" size="sm" onClick={handleMouseClick}>
        Hello
      </Button>
      <Button color="error">Default</Button>
      <Button color="error" size="lg">
        Default
      </Button>
      <Button color="error" size="xl">
        Default
      </Button>
      <Button color="error" size="2xl">
        Default
      </Button>
    </div>
  );
};
