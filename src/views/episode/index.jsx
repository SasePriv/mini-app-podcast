import { useParams } from 'react-router-dom';

function Episode() {
  const { episodeId } = useParams();
  return (
    <div>{episodeId}</div>
  );
}

export default Episode;
