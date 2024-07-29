import React, { useState, useEffect } from 'react';
import { LinkServer, MovieBox } from './index.js';
import { useActiveButton } from '../../hooks/useActiveButton.js';
// import ArtPlayer from './ArtPlayer';
// import Artplayer from 'artplayer';

const MovieWatchBox = ({ movieDetails }) => {
  const serverData = movieDetails.episodes[0].server_data;
  const serverName = movieDetails.episodes[0].server_name;
  const posterUrl = movieDetails.poster_url;

  const [activeButton, handleClick] = useActiveButton();

  const [selectedEpisode, setSelectedEpisode] = useState(serverData[0]);

  const handleEpisodeClick = (episode, index) => {
    setSelectedEpisode(episode);
    handleClick(index);
  };

  // console.log(posterUrl);
  return (
    <div>
      {/* <iframe src='https://player.phimapi.com/player/?url=https://s1.phim1280.tv/20240314/fjlKYmN9/index.m3u8' height={600} width={800}></iframe> */}

      <MovieBox
        poster={posterUrl}
        episode={selectedEpisode}
      />
      <LinkServer
        activeButton={activeButton}
        posterUrl={posterUrl}
        onEpisodeClick={handleEpisodeClick}
        serverName={serverName}
        serverData={serverData}
      />
      <span>{selectedEpisode.name}</span>
    </div>
  );
};

export default MovieWatchBox;
