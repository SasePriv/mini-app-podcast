import PropTypes from 'prop-types';
import PodcastCard from '../../components/podcastCard';
import { usePodcasts } from '../../hooks/usePodcasts';
import './style.css';

function PodcastList({ setLoading }) {
  const { podcasts } = usePodcasts(setLoading);

  return (
    <div className="grid-layout">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}

PodcastList.propTypes = {
  setLoading: PropTypes.func
};

export default PodcastList;
