import PropTypes from 'prop-types';
import { PodcastEpisode } from '../../models/podcastEpisode';
import './style.css';

function EpisodeCard({ episode }) {
  return (
    <div className="espisode-card">
      <h2 className="episode-card-title">{episode.trackName}</h2>
      <div className="episode-card-description">{episode.description}</div>
      <audio controls className="audio">
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