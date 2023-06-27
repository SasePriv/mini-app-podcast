import { useEffect, useState } from 'react';
import { Podcast } from '../models/podcast';
import { CacheFetchController } from '../helpers/cacheFetchController';

export const usePodcasts = (setLoading) => {
  const [podcasts, setPodcasts] = useState([]);
  const cacheFetch = new CacheFetchController();

  const fetchPodcasts = async () => {
    setLoading(true);
    const key = 'podcastList';
    const response = await cacheFetch.fetchCache(key, `https://cors-anywhere.herokuapp.com/${'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'}`);
    const data = await response;
    const { feed } = data;
    const listPodcast = Podcast.toInstanceList(feed.entry);
    setPodcasts(listPodcast);
    setLoading(false);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  return { podcasts };
};
