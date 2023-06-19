import { useState } from 'react';

import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface SquareProps {
  readonly value: string | null;
  readonly onSquareClick?: () => void;
}

interface BoardProps {
  readonly xIsNext: boolean;
  readonly squares: readonly (string | null)[];
  readonly onPlay: (nextSquares: ReadonlyArray<string | null>) => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <Grid item>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={onSquareClick}
        sx={{
          width: '10vmin', // adjust these values as necessary
          height: '10vmin', // adjust these values as necessary
        }}
      >
        {value}
      </Button>
    </Grid>
  );
}

function calculateWinner(squares: readonly (string | null)[]): string | null {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isLineComplete = ([a, b, c]: number[]): boolean => {
    return squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c];
  };

  const completeLine = winningLines.find(isLineComplete);

  return completeLine ? squares[completeLine[0]] : null;
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (squares[i] != null || calculateWinner(squares) != null) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner != null) {
    status = '勝者🎉: ' + winner;
  } else {
    status = '次のプレイヤー: ' + (xIsNext ? 'Xの方' : 'Oの方');
  }

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="h5" gutterBottom className="status">
        {status}
      </Typography>
      <Grid item container direction="row" justifyContent="center">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </Grid>
      <Grid item container direction="row" justifyContent="center">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </Grid>
      <Grid item container direction="row" justifyContent="center">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </Grid>
    </Grid>
  );
}

export function Game() {
  const initialSquares = Array(9).fill(null);
  const [history, setHistory] = useState<Array<ReadonlyArray<string | null>>>([initialSquares]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  function handlePlay(nextSquares: ReadonlyArray<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([initialSquares]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = move + '手目に戻る';
    } else {
      description = 'ゲームの開始';
    }
    return (
      <ListItem key={move}>
        <ListItemButton onClick={() => jumpTo(move)}>{description}</ListItemButton>
      </ListItem>
    );
  });

  return (
    <Grid
      container
      direction={matches ? 'row' : 'column'}
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Grid item xs={12} md={12} textAlign="center" mt={12} height="30vh">
        <Typography variant="h3" gutterBottom>
          さんもくならべ
        </Typography>
        <Button variant="contained" color="secondary" onClick={resetGame}>
          もう一度あそぶ
        </Button>
      </Grid>
      <Grid item xs={12} md={4} height="40vh">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ overflow: 'scroll', height: '40vh' }}>
          <List>{moves}</List>
        </Box>
      </Grid>
    </Grid>
  );
}
