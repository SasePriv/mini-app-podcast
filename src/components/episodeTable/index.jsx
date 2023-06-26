import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PodcastEpisode } from '../../models/podcastEpisode';
import { millisecondsToHHMMSS, formatDate } from '../../helpers/utils';
import './style.css';

function EpisodeTable({ podcastEpisodeList, podcastId }) {
  const navigate = useNavigate();
  const row = ({
    trackName, releaseDate, trackTimeMillis, id
  }, onClick) => (
    <tr key={id} onClick={onClick}>
      <td className="title-row">{trackName.trim()}</td>
      <td>{formatDate(new Date(releaseDate))}</td>
      <td>{millisecondsToHHMMSS(trackTimeMillis)}</td>
    </tr>
  );

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {podcastEpisodeList.map((episode) => (
            row(episode, () => {
              navigate(`/podcast/${podcastId}/episode/${episode.id}`);
            })
          ))}
        </tbody>
      </table>
    </div>
  );
}

EpisodeTable.propTypes = {
  podcastEpisodeList: PropTypes.arrayOf(PropTypes.instanceOf(PodcastEpisode)),
  podcastId: PropTypes.number,
};

export default EpisodeTable;
