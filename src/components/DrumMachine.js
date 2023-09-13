import {  useState, React, Fragment } from 'react'
import DrumPadElements from './DrumPadElements'

export default function DrumMachine() {
  const [audioClipText, setAudioClipText] = useState("");  

  return (
    <Fragment>
    <div id="drum-machine">        
        <DrumPadElements setAudioClipText={setAudioClipText} />        
    </div>
    <div id="display">{audioClipText}</div>        
    </Fragment>
  )
}
