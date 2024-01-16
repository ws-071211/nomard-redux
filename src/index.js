const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const num = document.querySelector('span');

let count = 0;

num.innerText = count;

const updateText = () => {
  num.innerText = count;
}

const plusEvent = () => {
  count = count + 1;
  updateText();
}

const minusEvent = () => {
  count = count - 1;
  updateText();
}

plus.addEventListener('click',plusEvent);
minus.addEventListener('click',minusEvent);