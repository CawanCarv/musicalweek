"use client";
import { useState } from "react";
import {ImVolumeMute, ImVolumeLow, ImVolumeMedium, ImVolumeHigh} from 'react-icons/im'
import "@/styles/MusicSlider.css";

export const MusicSlider = () => {
  const [value, setValue] = useState(0);
  const [volume, setVolume] = useState(<ImVolumeMute/>);

  function handleSend(value) {
    if (!value.target.disabled) {
      value.target.disabled = true;
    //   Avaliacao Fetch
    }
  }

  function handleInput(value) {
    setValue(value.target.value)
    //   Efeitos bonitos

  }

  return (
    <>
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        className="slider"
        id="myRange"
        onInput={(value) => handleInput(value)}
        onMouseUp={handleSend}
        onTouchEnd={handleSend}
      />
      <div>
        {(value < 1) && <ImVolumeMute className="volume"/>}
        {(value >= 1 && value < 50) && <ImVolumeLow className="volume"/>}
        {(value >= 50 && value < 75) && <ImVolumeMedium className="volume"/>}
        {(value >= 75) && <ImVolumeHigh className="volume"/>}
      </div>
    </>
  );
};
