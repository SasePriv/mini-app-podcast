import PropTypes from 'prop-types';
import './style.css';
import { PodcastDetail } from '../../models/podcastDetail';

function PodcastDetailCard({ podcast }) {
  return (
    <div className="detail-card">
      <div className="detail-card-header">
        <img
          src={podcast.image}
          alt="podcast-logo"
        />
      </div>
      <div className="separator" />
      <div className="detail-card-title-content">
        <p className="detail-card-title">{podcast.title}</p>
        <p className="detail-card-author">by {podcast.author}</p>
      </div>
      <div className="separator" />
      <div className="detail-card-description-content">
        <p className="detail-card-description-label">Description:</p>
        <p className="detail-card-description">
          A podcast where muscoicias oijsFDFKMLSDF OIASJD OKASDOIAS asdijfdo iadfjiosdfj sdfijsdf oisdfijsdf
        </p>
      </div>
    </div>
  );
}

PodcastDetailCard.propTypes = {
  podcast: PropTypes.instanceOf(PodcastDetail)
};

export default PodcastDetailCard;
