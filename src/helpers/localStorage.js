export class LocalStorageController {
  static #STORAGE_TIMEOUT = 86400000;

  static get storage() {
    return localStorage;
  }

  static set podcastList(data) {
    const dataToSave = {
      value: data,
      timestamp: new Date().getTime()
    };
    LocalStorageController.storage.setItem('podcastList', JSON.stringify(dataToSave));
  }

  static get podcastList() {
    return JSON.parse(LocalStorageController.storage.getItem('podcastList') || null);
  }

  static set podcastDetail({ data, id }) {
    const dataToSave = {
      value: data,
      timestamp: new Date().getTime()
    };
    LocalStorageController.storage.setItem(`podcastDetail_${id}`, JSON.stringify(dataToSave));
  }

  static getPodcastDetail(id) {
    return JSON.parse(LocalStorageController.storage.getItem(`podcastDetail_${id}`)) || null;
  }

  static isValidTimeStamp(timestamp) {
    return (new Date().getTime() - timestamp) < LocalStorageController.#STORAGE_TIMEOUT;
  }
}
