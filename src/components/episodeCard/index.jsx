import PropTypes from 'prop-types';
import { PodcastEpisode } from '../../models/podcastEpisode';
import './style.css';

function EpisodeCard({ episode }) {
  return (
    <div className="espisode-card">
      <h2 className="episode-card-title">{episode.title}</h2>
      {/* eslint-disable-next-line react/no-danger */}
      <div className="episode-card-description" dangerouslySetInnerHTML={{ __html: episode.description }} />
      <audio controls className="audio" data-testid="episode-audio">
        <source src={episode.episodeUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

EpisodeCard.propTypes = {
  episode: PropTypes.instanceOf(PodcastEpisode)
};

export default EpisodeCard;
