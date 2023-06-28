import PropTypes from 'prop-types';
import dompurify from 'dompurify';
import { useNavigate } from 'react-router-dom';
import { PodcastDetail } from '../../models/podcastDetail';
import './style.css';

function PodcastDetailCard({ podcast }) {
  const navigate = useNavigate();
  const sanitizer = dompurify.sanitize;

  const handleClick = () => {
    navigate(`/podcast/${podcast.id}`);
  };

  return (
    <div className="detail-card">
      <div className="detail-card-header">
        <img
          src={podcast.image}
          alt="podcast-logo"
          onClick={handleClick}
        />
      </div>
      <div className="separator" />
      <div className="detail-card-title-content">
        <p className="detail-card-title" onClick={handleClick}>{podcast.title}</p>
        <p className="detail-card-author">by {podcast.author}</p>
      </div>
      <div className="separator" />
      <div className="detail-card-description-content">
        <p className="detail-card-description-label">Description:</p>
        <p
          className="detail-card-description"
          dangerouslySetInnerHTML={{ __html: sanitizer(podcast.summary) }}
        />
      </div>
    </div>
  );
}

PodcastDetailCard.propTypes = {
  podcast: PropTypes.instanceOf(PodcastDetail)
};

export default PodcastDetailCard;
