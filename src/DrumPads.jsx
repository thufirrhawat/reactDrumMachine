import React from "react";

const drumPads = [
  { key: 'Q', id: 'Heater-1', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'},
  { key: 'Z', id: 'Kick-n-Hat', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'  },
  { key: 'X', id: 'Kick', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
];

const DrumPads = ({ onPadClick }) => {
  return (
    <div className="drum-pads">
      {drumPads.map((pad) => (
        <div
          key={pad.key}
          id={pad.id}
          className="drum-pad"
          onClick={() => onPadClick(pad)}
        >
          {pad.key}
          <audio id={pad.key} className="clip" src={pad.src}></audio>
        </div>
      ))}
    </div>
  );
};

export default DrumPads;
