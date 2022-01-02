const addingNewTask = (e, listTasks, inputElement) => {
  e.preventDefault();
  const task = inputElement.value;
  const tasks = [];
  tasks.push(task);
  listTasks.innerHTML += `<li>${tasks}</li>`;
  console.log(task);
};

const render = () => {
  const addButtonElement = document.querySelector(".js-addButton");
  const inputElement = document.querySelector(".js-addingInput");

  const listTasks = document.querySelector(".list__tasks");

  addButtonElement.addEventListener("click", e =>
    addingNewTask(e, listTasks, inputElement)
  );
};

const init = () => {
  render();
};
init();
