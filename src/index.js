import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addTodo = "ADD_TODO";
const deleteTodo = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case addTodo:
      return [];
    case deleteTodo:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: addTodo, text: toDo });
};

form.addEventListener("submit", onSubmit);