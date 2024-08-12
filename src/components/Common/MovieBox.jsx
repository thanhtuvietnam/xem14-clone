import React, { useState, useEffect, useRef, forwardRef } from 'react';
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';
import { IMG_URL } from '../../shared/constant';
import { MediaPlayer, MediaProvider, Poster, Track, Spinner } from '@vidstack/react';
import { icons } from '../../shared/icon';

const { TbRewindForward10, TbRewindBackward10 } = icons;

const FAST_SEEK_TIME = 10;
const SeekButton = forwardRef(({ direction, player }, ref) => {
  const handleClick = () => {
    if (player) {
      player.currentTime += direction === 'forward' ? FAST_SEEK_TIME : -FAST_SEEK_TIME;
    }
  };

  return (
    <button ref={ref} onClick={handleClick} className={`seek-button seek-${direction}`}>
      {direction === 'forward' ? <TbRewindForward10 size={25}/> : <TbRewindBackward10 size={25}/>}
    </button>
  );
});
const MovieBox = ({ episode, poster }) => {
  const playerRef = useRef(null);
  const seekForwardRef = useRef(null);
  const seekBackwardRef = useRef(null);

  //   console.log(posterUrl)
  const [loading, setLoading] = useState(false);

  const handleSeeking = () => {
    setLoading(true);
  };

  const handleSeeked = () => {
    setLoading(false);
  };

  return (
    <div className='mt-2'>
      <MediaPlayer
        ref={playerRef}
        src={episode?.link_m3u8}
        viewType='video'
        streamType='on-demand'
        logLevel='warn'
        crossOrigin='mixed'
        // autoPlay={true}
        hideControlsOnMouseLeave={false}
        load='eager'
        onSeeking={handleSeeking}
        onSeeked={handleSeeked}
        poster={`${IMG_URL}/${poster}`}>
        <MediaProvider>
          <PlyrLayout
            clickToPlay={false}
            translations='any'
            title='Cuồng phim'
            icons={plyrLayoutIcons}
            seekTime={10}
            displayDuration={true}
            invertTime={true}
            slots={{
              afterDuration: (
                <SeekButton ref={seekBackwardRef} direction="backward" player={playerRef.current} /> 
              ),
              afterCurrentTime: (
                <SeekButton ref={seekForwardRef} direction="forward" player={playerRef.current} />
              ),
            }}
          />
        </MediaProvider>

        {loading && (
          // <div className='pointer-events-none absolute inset-0 z-50 flex h-full w-full items-center justify-center'>
          //   <div className='animate-spin rounded-full h-20 w-20 border-8 border-t-transparent border-[#999090]'></div>
          // </div>
          <div className='pointer-events-none absolute inset-0 z-50 flex h-full w-full items-center justify-center'>
            <Spinner.Root
              className='text-white  transition-opacity duration-200 ease-linear animate-spin opacity-100'
              size={84}>
              <Spinner.Track
                className='opacity-25'
                width={8}
              />
              <Spinner.TrackFill
                className='opacity-75'
                width={8}
              />
            </Spinner.Root>
          </div>
        )}
      </MediaPlayer>
      <button>tap tiep theo</button>
    </div>
  );
};

export default MovieBox;

// import React, { useState, useRef, forwardRef } from 'react';
// import { MediaPlayer, MediaProvider, Spinner } from '@vidstack/react';
// import { DefaultAudioLayout, defaultLayoutIcons, DefaultVideoLayout} from '@vidstack/react/player/layouts/default';
// import '@vidstack/react/player/styles/default/theme.css';
// import '@vidstack/react/player/styles/default/layouts/video.css';
// // import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';

// import { IMG_URL } from '../../shared/constant';

// import { FastForwardOutlined, FastBackwardOutlined } from '@ant-design/icons';

// const MovieBox = ({ episode, poster }) => {
//   const playerRef = useRef(null);

//   return (
//     <div>
//       <MediaPlayer
//         ref={playerRef}
//         src={episode?.link_m3u8}
//         viewType='video'
//         streamType='on-demand'
//         logLevel='warn'
//         crossOrigin='mixed'
//         // playsInline
//         // autoPlay={true}
//         // hideControlsOnMouseLeave={true}
//         load='eager'
//         poster={`${IMG_URL}/${poster}`}>
//         <MediaProvider />
//         {/* <DefaultAudioLayout icons={defaultLayoutIcons} /> */}
//         <DefaultVideoLayout icons={defaultLayoutIcons}>

//         </DefaultVideoLayout>
//       </MediaPlayer>
//       <button>tap tiep theo</button>
//     </div>
//   );
// };

// export default MovieBox;
