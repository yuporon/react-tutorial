import { Grid, Typography } from '@mui/material';

interface User {
  readonly name: string;
  readonly imageUrl: string;
  readonly imageSize: number;
}

interface ProfileProps {
  readonly user: User;
}

export function Profile({ user }: ProfileProps) {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h1">{user.name}</Typography>
      </Grid>
      <Grid item>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </Grid>
    </Grid>
  );
}
