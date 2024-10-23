 
import { Player } from "@lordicon/react";
import { useEffect, useRef, useState } from 'react';


async function loadIcon(name: string) {
    const request = await fetch(`/${name}.json`);
    const data = await request.json();
    return data;
}

export default function Icon() {
    const initialized = useRef(false);
    const playerRef = useRef<Player>(null);
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        if (initialized.current) {
            return;   
        }

        initialized.current = true;

        loadIcon('confetti').then((iconData) => {
            setData(iconData);
        });
    }, []);
    
 

    const iconClick = () => {
        playerRef.current?.playFromBeginning();
    }

    return (
        <div onClick={iconClick}>
            <Player icon={undefined}   /> 
        </div>
    )
}