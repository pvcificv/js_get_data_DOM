'use strict';

const nodes = document.querySelectorAll('span.population');

const values = [];

nodes.forEach((el) => {
  const raw = (el.textContent || '').trim();
  const cleaned = raw.replace(/,/g, '').trim();

  if (/^\d+$/.test(cleaned)) {
    values.push(Number(cleaned));
  }
});

if (values.length > 0) {
  const total = values.reduce((a, b) => a + b, 0);
  const average = Math.round(total / values.length);

  document.querySelector('.total-population').textContent =
    total.toLocaleString('en-US');

  document.querySelector('.average-population').textContent =
    average.toLocaleString('en-US');
}
