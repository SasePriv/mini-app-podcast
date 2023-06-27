export class CacheFetchController {
  storageTimeout;

  constructor(timeToSave = 86400000) {
    this.storageTimeout = timeToSave;
  }

  static get storage() {
    return localStorage;
  }

  async fetchCache(key, url, type = 'json') {
    if (this.#validCache(key)) {
      return this.#getDataCached(key).value;
    }
    const response = await fetch(url);
    if (!response.ok) {
      const message = `An error has occurred while getting the podcast information: ${response.status}`;
      throw new Error(message);
    }
    const data = type === 'text' ? await response.text() : await response.json();
    this.#setDataCache(key, data);
    return data;
  }

  #getDataCached(key) {
    return JSON.parse(CacheFetchController.storage.getItem(`cache_${key}`)) || null;
  }

  #setDataCache(key, data) {
    const dataToSave = {
      value: data,
      timestamp: new Date().getTime()
    };
    CacheFetchController.storage.setItem(`cache_${key}`, JSON.stringify(dataToSave));
  }

  #validCache(key) {
    if (this.#getDataCached(key)) {
      return this.#isValidTimeStamp(this.#getDataCached(key).timestamp);
    }
    return false;
  }

  #isValidTimeStamp(timestamp) {
    return (new Date().getTime() - timestamp) < this.storageTimeout;
  }
}
