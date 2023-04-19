import React, { useRef } from 'react';
import { Button } from '../components/Button';
import { Stack } from '../layouts/Containers';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const tempRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <h1>Home</h1>
      <Button size="lg">Button v2</Button>
      <Stack  gap={3}>
        <h1>hey</h1>
        <h2>he</h2>
      </Stack>
    </div>
  );
};
