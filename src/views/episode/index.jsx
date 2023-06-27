import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import EpisodeCard from '../../components/episodeCard';

function Episode() {
  const navigate = useNavigate();
  const { episodeId } = useParams();
  const { episodesById } = useOutletContext();

  useEffect(() => {
    if (!(episodeId in episodesById)) {
      navigate('/*');
    }
  }, [episodeId]);

  return episodeId in episodesById && (<EpisodeCard episode={episodesById[episodeId]} />);
}

export default Episode;
