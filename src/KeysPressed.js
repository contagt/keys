export default class KeysPressed {
  constructor() {
    this._keyPresseds = new Set();
  }

  push(keyCode) {
    return this._keyPresseds.add(keyCode);
  }

  splice(keyCode) {
    return this._keyPresseds.delete(keyCode);
  }

  isKeyPressed(keyCode) {
    return this._keyPresseds.has(keyCode);
  }
}
