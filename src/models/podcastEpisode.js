import { Serializable } from './serializable';
import { secondsToHHMMSS } from '../helpers/utils';

export class PodcastEpisode extends Serializable {
  constructor(id, title, duration, releaseDate, description, episodeUrl) {
    super();
    this.id = id;
    this.title = title;
    this.duration = this.#handleDuration(duration);
    this.releaseDate = releaseDate;
    this.description = description;
    this.episodeUrl = episodeUrl;
  }

  static toInstanceList(list = []) {
    return list.map((props, index) => this.toInstance({ ...props, id: index }));
  }

  static toInstance(props = {}) {
    return new PodcastEpisode(
      props.id,
      props.title,
      props['itunes:duration'],
      props.pubDate,
      props.description,
      props.enclosure ? props.enclosure['@_url'] : null
    );
  }

  #handleDuration(duration) {
    if (duration) {
      return duration.toString().split(':').length > 1 ? duration : secondsToHHMMSS(duration);
    }
    return 'Mystery';
  }
}
