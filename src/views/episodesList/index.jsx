import { useOutletContext } from 'react-router-dom';
import EpisodesCount from '../../components/episodesCount';
import EpisodeTable from '../../components/episodeTable';

function EpisodesList() {
  const { podcastDetail } = useOutletContext();
  return (
    <>
      <EpisodesCount count={podcastDetail.trackCount} />
      <EpisodeTable
        podcastId={podcastDetail.id}
        podcastEpisodeList={podcastDetail.podcastEpisodeList}
      />
    </>
  );
}

export default EpisodesList;
