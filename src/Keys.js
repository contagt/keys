import KeysPressed from "./KeysPressed";

export default class Keys {
  constructor(el) {
    this.el = el;

    this.propertyname = "kys" + Math.random();
    while (el[this.propertyname] !== null) {
      this.propertyname = "keys" + Math.random();
    }

    this.el[this.propertyname] = new KeysPressed();

    this.el.addEventListener("keydown", (e) => {
      this.el.keys.push(e.code);
    });

    this.el.addEventListener("keyup", (e) => {
      this.el.keys.splice(e.code);
    });
  }

  addListener(codes = [], callback) {
    this.el.addEventListener("keydown", (e) => {
      let success = true;
      codes.forEach((code) => {
        success &= this.el[this.propertyname].isKeyPressed(code);
      });

      if (success) {
        callback(e);
      }
    });
  }
}
