import {  useState, React, Fragment } from 'react'
import DrumPadElements from './DrumPadElements'

export default function DrumMachine() {
  const [audioClipText, setAudioClipText] = useState("Audio Clip");  

  return (
    <Fragment>
    <div id="display">{audioClipText}</div>        
    <div id="drum-machine">        
        <DrumPadElements setAudioClipText={setAudioClipText} />        
    </div>    
    </Fragment>
  )
}
