import PropTypes from 'prop-types';
import './style.css';

function EpisodesCount({ count }) {
  return (
    <div className="episodesCount">
      <div>Episodes: {count}</div>
    </div>
  );
}

EpisodesCount.propTypes = {
  count: PropTypes.number
};

export default EpisodesCount;
