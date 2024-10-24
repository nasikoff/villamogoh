import { FC, useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

const ICON = require('@/public/swipe.json');

export const IconLord: FC<{ name: string }> = () => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    const playAnimation = () => {
      playerRef.current?.playFromBeginning();
      setTimeout(playAnimation, 2900); // Задержка анимации на 3 секунды
    }

    playAnimation();
  }, []);

  return (
    <div>
      <Player 
        ref={playerRef} 
        size={28} 
        icon={ICON}
        colorize='curentcolor'/>
    </div>
  );
};

export default IconLord;