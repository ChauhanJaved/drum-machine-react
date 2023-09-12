import React, { Fragment } from 'react'

export default function DrumPadElements() {
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
  return (    
       <Fragment>
        {
            drumPads.map((pad) => (
                <div id={pad.key} key={pad.key} className="drum-pad">{pad.key}</div>
            ))
        }
       </Fragment>
  )
}
