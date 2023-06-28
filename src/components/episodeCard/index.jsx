import PropTypes from 'prop-types';
import dompurify from 'dompurify';
import { PodcastEpisode } from '../../models/podcastEpisode';
import './style.css';

function EpisodeCard({ episode }) {
  const sanitizer = dompurify.sanitize;
  return (
    <div className="episode-card">
      <h2 className="episode-card-title">{episode.title}</h2>
      <div
        className="episode-card-description"
        dangerouslySetInnerHTML={{ __html: sanitizer(episode.description) }}
      />
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
