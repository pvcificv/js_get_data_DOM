'use strict';

const nodes = document.querySelectorAll('.population');
const populations = [...nodes].map(function (el) {
  return Number(el.textContent.replace(/\D/g, ''));
});

const total = populations.reduce((a, b) => a + b, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString('en-US');
