import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PodcastCard from '../../components/podcastCard';
import { usePodcasts } from '../../hooks/usePodcasts';
import { usePodcastFilter } from '../../hooks/usePodcastFilter';
import PodcastFilter from '../../components/podcastFilter';
import './style.css';

function PodcastList({ setLoading }) {
  const [search, setSearch] = useState('');
  const { podcasts } = usePodcasts(setLoading);
  const { filteredPodcastList } = usePodcastFilter(podcasts, search);
  const navigate = useNavigate();

  const handleClick = (to) => {
    navigate(to);
  };

  return (
    <div className="grid-layout">
      <PodcastFilter count={filteredPodcastList.length} onChangeSearch={setSearch} />
      {filteredPodcastList.map((podcast) => (
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
