import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { XMLParser } from 'fast-xml-parser';
import { PodcastDetail } from '../models/podcastDetail';
import { CacheFetchController } from '../helpers/cacheFetchController';

export const usePodcastDetail = ({ podcastId, setLoading }) => {
  const navigate = useNavigate();
  const [podcastDetail, setPodcastDetail] = useState(null);
  const cacheFetch = new CacheFetchController();

  const fetchPodcastDetail = async () => {
    setLoading(true);
    try {
      const response = await cacheFetch.fetchCache(`podcastDetail_${podcastId}`, `https://cors-anywhere.herokuapp.com/${`https://itunes.apple.com/lookup?id=${podcastId}`}`);
      const data = await response;
      const podcast = data.results[0];
      const feedUrl = `https://cors-anywhere.herokuapp.com/${podcast.feedUrl}`;
      const feedUrlXml = await cacheFetch.fetchCache(`feedUrl_${podcastId}`, feedUrl, 'text');
      const parser = new XMLParser({
        ignoreAttributes: false,
        parseAttributeValue: true,
        parseNodeValue: true
      });
      const feedJson = parser.parse(feedUrlXml).rss.channel;
      const podcastDetailInstance = PodcastDetail.toInstance({
        ...podcast,
        trackId: podcastId,
        podcastEpisode: feedJson.item,
        summary: feedJson.description
      });
      setPodcastDetail(podcastDetailInstance);
    } catch (e) {
      navigate('/*');
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPodcastDetail();
  }, []);

  return { podcastDetail };
};
