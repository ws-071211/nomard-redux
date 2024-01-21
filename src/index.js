import { createStore } from "redux";

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const num = document.querySelector('span');

const PLUS = "plus";
const MINUS = "minus";

num.innerText = 0;

const countReducer = (count = 0,action) => {
  switch(action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const store = createStore(countReducer);

const onChange = () => {
  num.innerText = store.getState();
};

store.subscribe(onChange);

const handlePlus = () => {
  store.dispatch({type:"plus"})
}

const handleMinus = () => {
  store.dispatch({type:"minus"})
}

plus.addEventListener("click",handlePlus);
minus.addEventListener("click",handleMinus);
