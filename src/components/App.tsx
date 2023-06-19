import '../style/App.css';

import { Game } from './Game';

export default function App() {
  const style = {
    backgroundImage: 'url(https://gahag.net/img/201604/13s/gahag-0075581837-1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={style}>
      <Game />
    </div>
  );
}
