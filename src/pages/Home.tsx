import React, { useRef } from 'react';
import { Button } from '../components/Button';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const tempRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <h1>Home</h1>
      <Button size="lg">Button v2</Button>
    </div>
  );
};
