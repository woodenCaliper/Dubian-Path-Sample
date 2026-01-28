const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

const requiredStrings = [
  'Dubins Path Sample',
  'id="x1"',
  'id="y1"',
  'id="theta1"',
  'id="x2"',
  'id="y2"',
  'id="theta2"',
  'id="radius"',
  'id="scale"',
  'id="canvas"',
  'id="legend"'
];

requiredStrings.forEach((token) => {
  assert(
    html.includes(token),
    `Expected HTML to include ${token}`
  );
});

console.log('smoke.test.js: OK');
