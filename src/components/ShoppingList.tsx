import { Grid, Typography } from '@mui/material';

interface Item {
  readonly id: number;
  readonly title: string;
  readonly isFruit: boolean;
}

interface ShoppingListProps {
  readonly items: readonly Item[];
}

export function ShoppingList({ items }: ShoppingListProps) {
  const listItems = items.map((item) => (
    <Grid item key={item.id}>
      <Typography
        style={{
          color: item.isFruit ? 'magenta' : 'darkgreen',
        }}
      >
        {item.title}
      </Typography>
    </Grid>
  ));

  return (
    <Grid container direction="column">
      {listItems}
    </Grid>
  );
}
