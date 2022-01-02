const addingTest = (task, listTasks, newTask) => {
  listTasks.innerHTML += `<li>${task}</li>`;

  console.log(task);
};

const addingNewTask = e => {
  e.preventDefault();
  const listTasks = document.querySelector(".js-list__tasks");
  const tasks = [{ x: "aa" }];

  let newTask = "";

  for (const task of tasks) {
    newTask += `<li>${task.x}</li>`;
  }

  listTasks.innerHTML = newTask;
  //   console.log(tasks);
  const inputElement = document.querySelector(".js-addingInput");
  const task = inputElement.value.trim();
  addingTest(task, listTasks);
};

const render = () => {};

const init = () => {
  const addButtonElement = document.querySelector(".js-addButton");
  addButtonElement.addEventListener("click", e => addingNewTask(e));

  render();
};
init();
