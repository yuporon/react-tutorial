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
    <li
      key={item.id}
      style={{
        color: item.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {item.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
