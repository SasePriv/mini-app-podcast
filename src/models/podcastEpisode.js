import { Serializable } from './serializable';

export class PodcastEpisode extends Serializable {
  constructor(id, trackName, trackTimeMillis, releaseDate, description, episodeUrl) {
    super();
    this.id = id;
    this.trackName = trackName;
    this.trackTimeMillis = trackTimeMillis;
    this.releaseDate = releaseDate;
    this.description = description;
    this.episodeUrl = episodeUrl;
  }

  static toInstance(props = {}) {
    return new PodcastEpisode(
      props.trackId,
      props.trackName,
      props.trackTimeMillis,
      props.releaseDate,
      props.description,
      props.episodeUrl
    );
  }
}
