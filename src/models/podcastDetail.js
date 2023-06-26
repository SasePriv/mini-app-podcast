import { Podcast } from './podcast';
import { PodcastEpisode } from './podcastEpisode';

export class PodcastDetail extends Podcast {
  constructor(id, title, image, author, trackCount, podcastEpisodeList) {
    super(id, title, image, author);
    this.trackCount = trackCount;
    this.podcastEpisodeList = podcastEpisodeList;
    this.episodeMapById = this.#podcastEpisodeById(podcastEpisodeList);
  }

  static toInstance(props = {}) {
    const podcastEpisodeList = PodcastEpisode.toInstanceList(props.podcastEpisode);
    return new PodcastDetail(props.trackId, props.collectionName, props.artworkUrl600, props.artistName, props.trackCount, podcastEpisodeList);
  }

  #podcastEpisodeById(podcastEpisodeList) {
    const episodeMapById = {};
    podcastEpisodeList.forEach((episode) => {
      episodeMapById[episode.id] = episode;
    });
    return episodeMapById;
  }
}
