import { useRef, useState, useEffect } from 'react'
import { songsdata } from './data/data';

function App() {
  // const handleSongPlaying = () => {
  //   isPlaying === 'music-container' ? setIsPlaying('music-container play') : setIsPlaying('music-container')
  //   playPauseBtn === "fas fa-play" ? setPlayPauseBtn("fas fa-pause") : setPlayPauseBtn("fas fa-play")
  //   isPlaying === 'music-container' ? audio.current.play() : audio.current.pause()
  // }
  const [songs, setSongs] = useState(songsdata);
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
        <div className="navigation">
          <button id="prev" className="action-btn">
            <i className="fas fa-backward"></i>
          </button>
          <button id="play" className="action-btn action-btn-big" onClick={playPause}>
            {
              isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>
            }
          </button>
          <button id="next" className="action-btn">
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
