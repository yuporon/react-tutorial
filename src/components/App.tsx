import '../style/App.css';
import { useState } from 'react';

import { FilterableProductTable } from './FilterableProductTable';
import { Game } from './Game';
import { Profile } from './Profile';
import { ShoppingList } from './ShoppingList';
import { ITEMS } from '../data/Item';
import { PRODUCTS } from '../data/Product';
import { USER } from '../data/User';

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
        <Profile user={USER} />
      </div>
      <div>
        <ShoppingList items={ITEMS} />
      </div>
      <div>
        <Game />
      </div>
      <div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </>
  );
}
