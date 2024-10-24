import { FC, useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
 

const ICON = require('@/public/confetti.json');

export const IconLord: FC<{ name: string }> = ({ name }) => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    if (playerRef.current) {
        playerRef.current.playFromBeginning();
    }
}, []);

  return (
    <div>
      <Player ref={playerRef} size={96} icon={ICON} />
    </div>
  );
};

export default IconLord;
