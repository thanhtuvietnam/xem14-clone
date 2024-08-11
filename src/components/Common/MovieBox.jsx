import React, { useState, useEffect, useRef } from 'react';
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
// import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';
import { IMG_URL } from '../../shared/constant';
import { MediaPlayer, MediaProvider } from '@vidstack/react';


const ForwardButton = ({ player }) => {
  const handleClick = () => {
    player.current.currentTime += 10;
  };

  return (
    <button
      className="plyr__control"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faFastForward} />
    </button>
  );
};
const RewindButton = ({ player }) => {
  const handleClick = () => {
    player.current.currentTime -= 10;
  };

  return (
    <button
      className="plyr__control"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faBackward} />
    </button>
  );
};

const MovieBox = ({ episode, poster }) => {
  const playerRef = useRef(null);
  //   console.log(posterUrl)
  const [loading, setLoading] = useState(false);
  const handleSeeking = () => {
    setLoading(true);
  };

  const handleSeeked = () => {
    setLoading(false);
  };

  return (
    <div>
      <MediaPlayer
        src={episode?.link_m3u8}
        viewType='video'
        streamType='on-demand'
        logLevel='warn'
        crossOrigin='mixed'
        playsInline
        // autoPlay={true}
        hideControlsOnMouseLeave={true}
        load='eager'
        onSeeking={handleSeeking}
        onSeeked={handleSeeked}
        poster={`${IMG_URL}/${poster}`}
        ref={playerRef}
        
      >
        <MediaProvider>
          {/* {textTracks.map((track) => (
        <Track
          {...track}
          key={track.src}
        />
      ))} */}
        </MediaProvider>

        <PlyrLayout
          translations='any'
          title='Cuồng phim'
          // thumbnails='https://gcs.tripi.vn/public-tripi/tripi-feed/img/477733sdR/anh-mo-ta.png'
          icons={plyrLayoutIcons}
        />
        {loading && (
          <div className='pointer-events-none absolute inset-0 z-50 flex h-full w-full items-center justify-center'>
            <div className='animate-spin rounded-full h-20 w-20 border-8 border-t-transparent border-[#999090]'></div>
          </div>
        )}
      </MediaPlayer>
      <button>tap tiep theo</button>
    </div>
  );
};

export default MovieBox;
