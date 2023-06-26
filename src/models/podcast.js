import { Serializable } from './serializable';

export class Podcast extends Serializable {
  constructor(id, title, image, author) {
    super();
    this.id = id;
    this.title = title;
    this.image = image;
    this.author = author;
  }

  static toInstance(props = {}) {
    return new Podcast(props.id.attributes['im:id'], props.title.label, props['im:image'][props['im:image'].length - 1].label, props['im:artist'].label);
  }
}
