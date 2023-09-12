import React, {useEffect, Fragment } from 'react'

export default function DrumPadElements(props) {
    useEffect(() => {
      const handleKeyDown = (e) => {
        const pressedKey = e.key.toUpperCase();
        const pressedDrumPad = drumPads.find((pad) => pad.key === pressedKey);
        pressedDrumPad && playAudio(pressedDrumPad.key, pressedDrumPad.src, pressedDrumPad.description);
      };
      document.addEventListener("keydown", handleKeyDown);
      return() => {
        document.removeEventListener("keydown", handleKeyDown);        
      };
    },[]); 
    const {setAudioClipText} = props
    const drumPads = [
        {
          key: 'Q',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
          description: 'Heater 1'
        },
        {
          key: 'W',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
          description: 'Heater 2'
        },
        {
          key: 'E',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
          description: 'Heater 3'
        },{
          key: 'A',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
          description: 'Heater 4'
        },
        {
          key: 'S',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
          description: 'Clap'
        },{
          key: 'D',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
          description: 'Open-HH'
        },
        {
          key: 'Z',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
          description: `Kick-n'-Hat`
        },
        {
          key: 'X',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
          description: 'Kick'
        },
        {
          key: 'C',
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
          description: 'Closed-HH'
        }
      ]
      const playAudio = (key, src, description) => {        
        setAudioClipText(description);
        document.getElementById(key).play();


      };
  return (    
       <Fragment>
        {
            drumPads.map((pad) => (
                <div id={pad.key + pad.description} key={pad.key} className="drum-pad" onClick={() => playAudio(pad.key, pad.src, pad.description )}>
                  {pad.key}
                  <audio src={pad.src} className="clip" id={pad.key}></audio>
                </div>
            ))
        }
       </Fragment>
  )
}
