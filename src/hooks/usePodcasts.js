import { useEffect, useState } from 'react';
import { Podcast } from '../models/podcast';

export const usePodcasts = (setLoading) => {
  const [podcasts, setPodcasts] = useState([]);

  const fetchPodcasts = async () => {
    setLoading(true);
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`);

    if (!response.ok) {
      const message = `An error has occurred while getting the podcast information: ${response.status}`;
      setLoading(false);
      throw new Error(message);
    }
    const data = await response.json();
    const content = JSON.parse(data.contents);
    const listPodcast = Podcast.toInstanceList(content.feed.entry);
    setPodcasts(listPodcast);
    setLoading(false);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  return { podcasts };
};
