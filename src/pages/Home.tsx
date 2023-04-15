import React from 'react';
import { Button } from '../components';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <h1>Home</h1>
      <Button>Button v2</Button>
    </div>
  );
};
