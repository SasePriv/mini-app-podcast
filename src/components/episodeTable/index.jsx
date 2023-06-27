import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PodcastEpisode } from '../../models/podcastEpisode';
import { formatDate } from '../../helpers/utils';
import './style.css';

function EpisodeTable({ podcastEpisodeList, podcastId }) {
  const navigate = useNavigate();
  const row = ({
    title, releaseDate, duration, id
  }, onClick) => (
    <tr key={id} onClick={onClick}>
      <td className="title-row">{title.trim()}</td>
      <td>{formatDate(new Date(releaseDate))}</td>
      <td>{duration}</td>
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
  podcastId: PropTypes.string,
};

export default EpisodeTable;
