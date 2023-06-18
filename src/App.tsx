import './App.css';
import { useState } from 'react';

import { Game } from './Game';
import { Profile } from './Profile';
import { ShoppingList } from './ShoppingList';

export const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

interface MyButtonProps {
  readonly count?: number;
  readonly onClick?: () => void;
}

function MyButton({ count, onClick }: MyButtonProps) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      <div>
        <h2>Counters that update together</h2>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <ShoppingList />
      </div>
      <div>
        <Game />
      </div>
    </>
  );
}
