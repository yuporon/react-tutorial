import '../style/App.css';

import { Game } from './Game';

export default function App() {
  // const style = {
  //   backgroundImage: 'url(https://gahag.net/img/201604/13s/gahag-0075581837-1.png)',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  // };

  return (
    // 背景画像を設定したら、flexの設定が上手くいかず、、、諦め。
    // <div style={style}>
    <Game />
    // </div>
  );
}
