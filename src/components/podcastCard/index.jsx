import './style.css';
import PropTypes from 'prop-types';
import { Podcast } from '../../models/podcast';

function PodcastCard({ podcast }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={podcast.image}
        alt="podcast-logo"
      />
      <div className="card-content">
        <h3 className="card-title">{podcast.title}</h3>
        <p className="card-author">Author: {podcast.author}</p>
      </div>
    </div>
  );
}

PodcastCard.propTypes = {
  podcast: PropTypes.instanceOf(Podcast)
};

export default PodcastCard;
