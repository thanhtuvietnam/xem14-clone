import React from 'react';
import { useEffect, useRef } from 'react';
import Artplayer from 'artplayer';

const ArtPlayer = ({ option, getInstance, ...rest }) => {
  const artRef = useRef();

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
    });

    if (getInstance && typeof getInstance === 'function') {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, []);

  return (
    <div
      ref={artRef}
      {...rest}></div>
  );
};

export default ArtPlayer;
