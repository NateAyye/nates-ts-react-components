import React from 'react';
import { Avatar } from '../components/Avatar';

interface AvatarPageProps {}

export const AvatarPage: React.FC<AvatarPageProps> = ({}) => {
  const nameUsers = ['Junior', 'Jane', 'W', 'John', 'JR'];
  const pictureUsers = [
    'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    'https://i.pravatar.cc/150?u=a04258114e29026702d',
    'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
  ];
  return (
    <div>
      <h1>Avatar Component</h1>
      <section>
        <Avatar zoomed src={pictureUsers[0]} />
        <Avatar zoomed color="success" round bordered src={pictureUsers[1]} />
        <Avatar color="error" bordered src={pictureUsers[2]} />
        <Avatar text={nameUsers[0]} />
        <Avatar color="yellow600" text={nameUsers[1]} />
        <Avatar color="cyan700" text={nameUsers[2]} />
        <Avatar  round color="error" text={nameUsers[3]} />
        <Avatar  round color="primary" text={nameUsers[4]} />
      </section>
    </div>
  );
};
