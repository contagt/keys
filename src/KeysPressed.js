export default class KeysPressed {
    constructor() {
        this._keyPresseds = [];
    }

    push(keyCode) {
        if (this.isKeyPressed(keyCode) === false) {
            return this._keyPresseds.push(keyCode)
        }
    }

    splice(keyCode) {
        if (this.isKeyPressed(keyCode) === true) {
            const index = this._keyPresseds.indexOf(keyCode);
            if (index !== -1) {
                this._keyPresseds.splice(index, 1);
            }
        }
    }

    isKeyPressed(keyCode) {
        return this._keyPresseds.includes(keyCode)
    }
}