import PropTypes from 'prop-types';
import { useParams, Outlet } from 'react-router-dom';
import { useMemo } from 'react';
import { usePodcastDetail } from '../../hooks/usePodcastDetail';
import PodcastDetailCard from '../../components/podcastDetailCard';
import './style.css';

function PodcastDetail({ setLoading }) {
  const { podcastId } = useParams();
  const { podcastDetail } = usePodcastDetail({ podcastId, setLoading });

  const episodesById = useMemo(
    () => podcastDetail?.episodeMapById,
    [podcastDetail]
  );

  return podcastDetail && (
    <div className="podcast-detail">
      <PodcastDetailCard podcast={podcastDetail} />
      <div className="podcast-detail-content">
        <Outlet context={{ podcastDetail, episodesById }} />
      </div>
    </div>
  );
}

PodcastDetail.propTypes = {
  setLoading: PropTypes.func
};

export default PodcastDetail;
