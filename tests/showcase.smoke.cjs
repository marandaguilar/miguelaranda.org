const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function group(name, definitions) {
  const makeControl = () => ({ addEventListener(type, fn) { this[type] = fn; } });
  const buttons = definitions.map(([sample, title]) => ({
    dataset: { sample },
    querySelector() { return { textContent: title }; },
    setAttribute(name, value) { this[name] = value; },
    addEventListener(type, fn) { this[type] = fn; }
  }));
  const screen = { innerHTML: '', classList: { add() {}, remove() {} }, addEventListener(type, fn) { this[type] = fn; } };
  const caption = { textContent: '' };
  const counter = { textContent: '' };
  const prev = makeControl();
  const next = makeControl();
  return {
    dataset: { group: name }, buttons, screen, caption, counter, prev, next,
    querySelectorAll() { return buttons; },
    querySelector(selector) { return ({ '[data-screen]': screen, '[data-caption]': caption, '[data-counter]': counter, '[data-prev]': prev, '[data-next]': next })[selector]; }
  };
}

const groups = [
  group('venta', [['catalogo','Catálogos digitales'],['qr','Códigos QR'],['tienda','Web y tienda'],['mapa','Google Maps']]),
  group('control', [['pos','Punto de venta'],['inventario','Inventario'],['citas','Citas']]),
  group('medida', [['sistemas','Sistemas web'],['apps','Apps']])
];
vm.runInNewContext(fs.readFileSync('showcase.js', 'utf8'), {
  document: { querySelectorAll() { return groups; } },
  window: { addEventListener() {} },
  matchMedia() { return { matches: true }; },
  location: { hash: '' },
  setTimeout, clearTimeout
});

for (const item of groups) {
  for (const button of item.buttons) {
    button.click();
    assert.ok(item.screen.innerHTML.length > 100, `${button.dataset.sample} did not render`);
    assert.equal(button['aria-pressed'], 'true');
  }
  item.next.click();
  assert.equal(item.counter.textContent, `1 / ${item.buttons.length}`);
  item.prev.click();
  assert.equal(item.counter.textContent, `${item.buttons.length} / ${item.buttons.length}`);
}

const control = groups[1];
control.buttons[0].click();
const act = dataset => control.screen.click({ target: { closest() { return { dataset }; } } });
act({ posTab:'productos' });
assert.match(control.screen.innerHTML, /Productos/);
act({ posTab:'vender' });
act({ posAdd:'35' });
assert.match(control.screen.innerHTML, /Total \$130/);
act({ posPay:'1' });
assert.match(control.screen.innerHTML, /Tickets/);
act({ posTab:'vender' });
act({ posNew:'1' });
assert.match(control.screen.innerHTML, /Total \$0/);
console.log('Nine visual examples, carousel controls and POS interactions: OK');
