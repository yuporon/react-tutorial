import '../style/App.css';
import { useState } from 'react';

import { Grid } from '@mui/material';

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
    <Grid container direction="column">
      <Grid item>
        <h1>Welcome to my app</h1>
      </Grid>
      <Grid item>
        <h2>Counters that update together</h2>
        <Grid container direction="row">
          <Grid item>
            <MyButton count={count} onClick={handleClick} />
          </Grid>
          <Grid item>
            <MyButton count={count} onClick={handleClick} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Profile user={USER} />
      </Grid>
      <Grid item>
        <ShoppingList items={ITEMS} />
      </Grid>
      <Grid item>
        <Game />
      </Grid>
      <Grid item>
        <FilterableProductTable products={PRODUCTS} />
      </Grid>
    </Grid>
  );
}
