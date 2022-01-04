// const addingTest = (task, listTasks, newTask) => {
//   listTasks.innerHTML += `<li>${task}</li>`;

//   console.log(task);
// };

const tasks = [{ content: "" }];

const addingNewTask = e => {
  e.preventDefault();
  const inputElement = document.querySelector(".js-addingInput");
  let task = inputElement.value.trim();
  if (task === "") {
    return;
  }

  tasks.push({
    content: task,
  });

  renderFromArray();
};

const renderFromArray = () => {
  let listTasks = document.querySelector(".js-list__tasks");

  let newTask = "";

  for (const task of tasks) {
    newTask += `<li>${task.content}</li>`;
  }

  listTasks.innerHTML = newTask;
};

const init = () => {
  const addButtonElement = document.querySelector(".js-addButton");
  addButtonElement.addEventListener("click", e => addingNewTask(e));
};
init();
