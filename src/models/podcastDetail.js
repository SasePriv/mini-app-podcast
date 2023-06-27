import { Podcast } from './podcast';
import { PodcastEpisode } from './podcastEpisode';

export class PodcastDetail extends Podcast {
  constructor(id, title, image, author, trackCount, summary, podcastEpisodeList) {
    super(id, title, image, author);
    this.trackCount = trackCount;
    this.podcastEpisodeList = podcastEpisodeList;
    this.podcastEpisodeByID = this.#podcastEpisodeByID(podcastEpisodeList);
    this.summary = summary;
  }

  static toInstance(props = {}) {
    const podcastEpisodeList = PodcastEpisode.toInstanceList(props.podcastEpisode);
    return new PodcastDetail(props.trackId, props.collectionName, props.artworkUrl600, props.artistName, props.trackCount, props.summary, podcastEpisodeList);
  }

  #podcastEpisodeByID(podcastEpisodeList) {
    const episodeMapById = {};
    podcastEpisodeList.forEach((episode) => {
      episodeMapById[episode.id] = episode;
    });
    return episodeMapById;
  }
}
