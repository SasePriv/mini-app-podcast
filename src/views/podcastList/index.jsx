import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import PodcastCard from '../../components/podcastCard';
import { usePodcasts } from '../../hooks/usePodcasts';
import './style.css';

function PodcastList({ setLoading }) {
  const { podcasts } = usePodcasts(setLoading);
  const navigate = useNavigate();

  const handleClick = (to) => {
    navigate(to);
  };

  return (
    <div className="grid-layout">
      {podcasts.map((podcast) => (
        <div tabIndex={0} role="button" key={podcast.id} onClick={() => handleClick(`/podcast/${podcast.id}`)}>
          <PodcastCard podcast={podcast} />
        </div>
      ))}
    </div>
  );
}

PodcastList.propTypes = {
  setLoading: PropTypes.func
};

export default PodcastList;
