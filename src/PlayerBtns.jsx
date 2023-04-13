import React from 'react'

function PlayerBtns({isPlaying, playPause, prevSong, nextSong}) {
  return (
    <div className="navigation">
        <button className="action-btn" onClick={prevSong}>
        <i className="fas fa-backward"></i>
        </button>
        <button className="action-btn action-btn-big" onClick={playPause}>
        {
            isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>
        }
        </button>
        <button className="action-btn" onClick={nextSong}>
        <i className="fas fa-forward"></i>
        </button>
    </div>
  )
}

export default PlayerBtns
