import hey from './images/hey.jpg'
import summer from './images/summer.jpg'
import ukelee from './images/ukulele.jpg'
import heyMusic from './music/hey.mp3'
import summerMusic from './music/summer.mp3'
import ukuleleMusic from './music/ukulele.mp3'

function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>

      <div className="music-container" id="music-container">
        <div className="music-info">
          <h4 id="title"></h4>
          <div className="progress-container" id="progress-container">
            <div className="progress" id="progress"></div>
          </div>
        </div>

        <audio src={ukuleleMusic} id="audio"/>

        <div className="img-container">
          <img src={ukelee} alt="music-cover" id="cover" />
        </div>
        <div className="navigation">
          <button id="prev" className="action-btn">
            <i className="fas fa-backward"></i>
          </button>
          <button id="play" className="action-btn action-btn-big">
            <i className="fas fa-play"></i>
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
