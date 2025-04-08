import { expect, it } from "vitest";
import Keys from "../src/Keys";

it("test keypress", () => {
    const el = document.createElement('input');
    let keys = new Keys(el);
    keys.addListener(['keyT'], (e) => {
        expect(e.code).toBe('keyT')
    })

    const down = new KeyboardEvent('keydown', { code:'keyT', key: 't' });
    const up = new KeyboardEvent('keyup', { code:'keyT', key: 't'});

    expect(el != undefined, "Element exists")

    el.dispatchEvent(down)
    el.dispatchEvent(up)
})

it("test keypress wrong definition", () => {
    const el = document.createElement('input');
    let keys = new Keys(el);
    keys.addListener(['keyT'], (e) => {
        expect(e.code).not.toBeCalled()
        expect(e.code).not.toBe('keyT')
    })

    const down = new KeyboardEvent('keydown', { code:'keyJ', key: 't' });
    const up = new KeyboardEvent('keyup', { code:'keyJ', key: 't'});

    expect(el != undefined, "Element exists")

    el.dispatchEvent(down)
    el.dispatchEvent(up)
})

it("test keypress wrong key", () => {
    const el = document.createElement('input');
    let keys = new Keys(el);
    keys.addListener(['keyJ'], (e) => {
        expect(e.code).not.toBe('keyT')
    })

    const down = new KeyboardEvent('keydown', { code:'keyJ', key: 't' });
    const up = new KeyboardEvent('keyup', { code:'keyJ', key: 't'});

    expect(el != undefined, "Element exists")

    el.dispatchEvent(down)
    el.dispatchEvent(up)
})

it("test two keypress", () => {
    const el = document.createElement('input');
    let keys = new Keys(el);

    keys.addListener(['keyT', 'keyK'], (e) => {
        expect(e.code).toBe('keyK')
    })

    const down = new KeyboardEvent('keydown', { code:'keyT', key: 't' });
    const down_K = new KeyboardEvent('keydown', { code:'keyK', key: 'k' });
    const up = new KeyboardEvent('keyup', { code:'keyT', key: 't'});

    expect(el != undefined, "Element exists")

    el.dispatchEvent(down)
    el.dispatchEvent(down_K)

    el.dispatchEvent(up)
})

it("test multi keypress", () => {
    const el = document.createElement('input');
    let keys = new Keys(el);

    keys.addListener(['keyT', 'keyK', 'keyJ'], (e) => {
        expect(e.code).toBe('keyJ')
    })

    const down = new KeyboardEvent('keydown', { code:'keyT', key: 't' });
    const down_K = new KeyboardEvent('keydown', { code:'keyK', key: 'k' });
    const down_J = new KeyboardEvent('keydown', { code:'keyJ', key: 'j' });
    const up = new KeyboardEvent('keyup', { code:'keyT', key: 't'});

    expect(el != undefined, "Element exists")

    el.dispatchEvent(down)
    el.dispatchEvent(down_K)
    el.dispatchEvent(down_J)

    el.dispatchEvent(up)

})

it("test multi with release keypress", () => {
    const el = document.createElement('input');
    let keys = new Keys(el);

    keys.addListener(['keyT', 'keyK', 'keyJ'], (e) => {
        expect(e.code).not.toBeCalled()
    })

    const down = new KeyboardEvent('keydown', { code:'keyT', key: 't' });
    const down_K = new KeyboardEvent('keydown', { code:'keyK', key: 'k' });
    const down_J = new KeyboardEvent('keydown', { code:'keyJ', key: 'j' });
    const up = new KeyboardEvent('keyup', { code:'keyT', key: 't'});

    expect(el != undefined, "Element exists")

    el.dispatchEvent(down)
    el.dispatchEvent(down_K)
    el.dispatchEvent(up)
    el.dispatchEvent(down_J)

})