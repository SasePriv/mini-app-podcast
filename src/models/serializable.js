export class Serializable {
  static toInstanceList(list = []) {
    return list.map(this.toInstance);
  }

  // eslint-disable-next-line no-unused-vars
  static toInstance(props = {}) {
    throw new Error('NotImplemented');
  }
}
