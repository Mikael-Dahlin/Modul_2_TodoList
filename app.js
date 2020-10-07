// set variables
const todoForm = document.querySelector("#addTodoForm");
const formInput = document.querySelector("#addTodoInputField");
const todoList = document.querySelector("#todoList");

// set focus on text input
formInput.focus();

// add event listener for submitting form
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addItemToList(formInput.value);
  todoForm.reset();
});

// function for adding items to list
function addItemToList(todo) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todo} <button onclick="removeItemFromList(this)">Delete</button></li>`
  );
}

// function for removing items from list
function removeItemFromList(element) {
  element.parentElement.remove();
  formInput.focus();
}
