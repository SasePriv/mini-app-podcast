import { Podcast } from './podcast';
import { PodcastEpisode } from './podcastEpisode';

export class PodcastDetail extends Podcast {
  constructor(id, title, image, author, trackCount, podcastEpisodeList) {
    super(id, title, image, author);
    this.trackCount = trackCount;
    this.podcastEpisodeList = podcastEpisodeList;
  }

  static toInstance(props = {}) {
    const podcastEpisodeList = PodcastEpisode.toInstanceList(props.podcastEpisode);
    return new PodcastDetail(props.trackId, props.collectionName, props.artworkUrl600, props.artistName, props.trackCount, podcastEpisodeList);
  }
}
