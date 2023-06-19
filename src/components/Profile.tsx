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
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
