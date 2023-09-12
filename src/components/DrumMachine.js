import {  useState, React } from 'react'
import DrumPadElements from './DrumPadElements'

export default function DrumMachine() {
  const [audioClipText, setAudioClipText] = useState("");  

  return (
    <div id="drum-machine">        
        <DrumPadElements setAudioClipText={setAudioClipText} />
        <div id="display">{audioClipText}</div>        
    </div>
  )
}
