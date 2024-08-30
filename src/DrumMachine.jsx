// DrumMachine.jsx
import React, { useState, useEffect, useCallback } from "react";
import DrumPads from "./DrumPads";
import Display from "./Display";

const drumPads = [
  { key: 'Q', id: 'Heater-1', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
  { key: 'Z', id: 'Kick-n-Hat', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { key: 'X', id: 'Kick', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
  { key: 'C', id: 'Closed-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
];

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState("");


  const handlePadClick = useCallback((pad) => {
    const audioElement = document.getElementById(pad.key);
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      setDisplayText(pad.id);
    }
  }, []);

  const handleKeyPress = useCallback((event) => {
    const pad = drumPads.find(p => p.key === event.key.toUpperCase());
    if (pad) {
      handlePadClick(pad);
    }
  }, [handlePadClick]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div id="drum-machine">
      <Display displayText={displayText} />
      <DrumPads onPadClick={handlePadClick} />
    </div>
  );
};

export default DrumMachine;
