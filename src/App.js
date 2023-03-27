import React, {useState, useRef} from 'react'
import "./styles/app.scss"
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'


import data from './data'

function App() {

  //Refs
  const audioRef = useRef(null)

  //State 
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState((songs[0]))
  const [isPlaying, setIsPlaying] = useState(false)

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [lightStatus, setLightStatus] = useState(false)

  //Handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration 
    setSongInfo({...songInfo, currentTime:current, duration:duration})
  }

  return (
    <div className={`App ${lightStatus ? "dark-mode" : 'light-mode'}`}>
      <Nav 
      libraryStatus={libraryStatus} 
      setLibraryStatus={setLibraryStatus}
      lightStatus={lightStatus}
      setLightStatus={setLightStatus}
      />

      <Song 
      currentSong={currentSong}/>

      <Player
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
      isPlaying={isPlaying}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      songs={songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}/>

      <Library 
      audioRef={audioRef}
      songs={songs} 
      setCurrentSong={setCurrentSong}
      isPlaying={isPlaying}
      libraryStatus={libraryStatus}/>

      <audio onTimeUpdate={timeUpdateHandler} 
      onLoadedMetadata={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
