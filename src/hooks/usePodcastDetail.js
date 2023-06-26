import { useEffect, useState } from 'react';
import { PodcastDetail } from '../models/podcastDetail';
import { LocalStorageController } from '../helpers/localStorage';

export const usePodcastDetail = ({ podcastId, setLoading }) => {
  const [podcastDetail, setPodcastDetail] = useState(null);

  const validCache = () => {
    if (LocalStorageController.getPodcastDetail(podcastId)) {
      return LocalStorageController.isValidTimeStamp(LocalStorageController.getPodcastDetail(podcastId).timestamp);
    }
    return false;
  };

  const apiCall = async () => {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&offset=200&limit=200`)}`);
    if (!response.ok) {
      const message = `An error has occurred while getting the podcast detail information: ${response.status}`;
      setLoading(false);
      throw new Error(message);
    }

    const data = await response.json();
    LocalStorageController.podcastDetail = { data, id: podcastId };
    return data;
  };

  const fetchPodcastDetail = async () => {
    setLoading(true);
    const response = validCache() ? LocalStorageController.getPodcastDetail(podcastId).value : await apiCall();
    const data = await response;
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
