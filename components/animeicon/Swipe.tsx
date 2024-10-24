import { FC, useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
 

const ICON = require('@/public/swipe.json');

export const IconLord: FC<{ name: string }> = () => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    if (playerRef.current) {
        playerRef.current.playFromBeginning();
    }
}, []);

  return (
    <div>
      <Player ref={playerRef} size={28} icon={ICON} onComplete={() => playerRef.current?.playFromBeginning()} colorize='curentcolor'/>
    </div>
  );
};

export default IconLord;
