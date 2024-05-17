import React from 'react'
import { useAppSelector } from '../../../../hooks'
import { SoundBarComp } from '../../../../types/ComponentsType';

export const Sound: React.FC<SoundBarComp> = ({ volume, changeVolume }) => {
    const { weatherNow } = useAppSelector((state) => state.currentWeather);
  
    return (
      <div>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={(event) => changeVolume(event)}
        />
      </div>
    );
  };