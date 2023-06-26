import { useOutletContext, useParams } from 'react-router-dom';
import EpisodeCard from '../../components/episodeCard';

function Episode() {
  const { episodeId } = useParams();
  const { episodesById } = useOutletContext();
  return (
    <EpisodeCard episode={episodesById[episodeId]} />
  );
}

export default Episode;
