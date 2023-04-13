import { useRef, useState, useEffect } from 'react'
import { songsdata } from './data/data';
import PlayerBtns from './PlayerBtns';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [playing, setplaying] = useState('music-container')
  const audio = useRef()

  useEffect(() => {
    if (isPlaying) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
  }, [isPlaying])
  

  //  Play Pause Audio
  const playPause = () => {
    setIsPlaying(!isPlaying)
    playing === 'music-container' 
    ? setplaying('music-container play') 
    : setplaying('music-container')
  }

  // Update Progress Bar
  const updateProgress = () => {
    const duration = audio.current.duration
    const cT = audio.current.currentTime
    const progress = cT / duration * 100
    setCurrentSong({...currentSong, progress: `${progress}%`, length: duration})
  }

  // Click On Progress Bar
  const clickRef = useRef();
  const setProgress = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset/width) * 100;
    audio.current.currentTime = divProgress / 100 * currentSong.length
  }

  // Next Song
  const nextSong = () => {
    const idx = songsdata.findIndex(song => song.id === currentSong.id)
    if (idx === songsdata.length - 1) {
      setCurrentSong(songsdata[0])
    } else {
      setCurrentSong(songsdata[idx+1])
    }
    audio.current.autoplay = true
  }

  // Previous Song
  const prevSong = () => {
    const idx = songsdata.findIndex(song => song.id === currentSong.id)
    if (idx === 0) {
      setCurrentSong(songsdata[songsdata.length - 1])
    } else {
      setCurrentSong(songsdata[idx-1])
    }
  }

  return (
    <div className="App">
      <h1>Music Player</h1>

      <div className={playing}>
        <div className="music-info">
          <h4 id="title">{currentSong.title}</h4>
          <div className="progress-container" onClick={setProgress} ref={clickRef}>
            <div className="progress" style={{width: currentSong.progress}}></div>
          </div>
        </div>

        <audio src={currentSong.audio} ref={audio} onTimeUpdate={updateProgress}/>

        <div className="img-container">
          <img src={currentSong.img} alt="music-cover"/>
        </div>
        <PlayerBtns 
          isPlaying = {isPlaying}
          prevSong = {prevSong}
          nextSong = {nextSong}
          playPause = {playPause}
        />
      </div>

    </div>
  );
}

export default App;
