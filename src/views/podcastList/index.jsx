import PodcastCard from '../../components/podcastCard';
import './style.css';

function PodcastList() {
  return (
    <div className="grid-layout">
      <PodcastCard />
      <PodcastCard />
      <PodcastCard />
      <PodcastCard />
    </div>
  );
}

export default PodcastList;
