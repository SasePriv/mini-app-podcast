import { useEffect, useState } from 'react';
import { PodcastDetail } from '../models/podcastDetail';

export const usePodcastDetail = ({ podcastId, setLoading }) => {
  const [podcastDetail, setPodcastDetail] = useState(null);

  const fetchPodcastDetail = async () => {
    setLoading(true);
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&offset=200&limit=200`)}`);
    if (!response.ok) {
      const message = `An error has occurred while getting the podcast detail information: ${response.status}`;
      setLoading(false);
      throw new Error(message);
    }

    const data = await response.json();
    const content = JSON.parse(data.contents);
    const podcast = content.results.shift();
    const podcastDetailInstance = PodcastDetail.toInstance({ ...podcast, podcastEpisode: content.results });
    setPodcastDetail(podcastDetailInstance);
    setLoading(false);
  };

  useEffect(() => {
    fetchPodcastDetail();
  }, []);

  return { podcastDetail };
};
