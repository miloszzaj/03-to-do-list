{
  const tasks = [];

  const addingNewTask = e => {
    e.preventDefault();
    const inputElement = document.querySelector(".js-addingInput");
    inputElement.focus();
    let task = inputElement.value.trim();
    inputElement.value = "";

    if (task === "") {
      return;
    }

    tasks.push({
      content: task,
      isDone: false,
    });

    renderFromArray();
  };
  const deleteTask = index => {
    tasks.splice(index, 1);
    renderFromArray();
  };

  const doneTask = index => {
    tasks[index].isDone = !tasks[index].isDone;
    renderFromArray();
  };
  const connectedButtons = () => {
    const deleteButtonElements =
      document.querySelectorAll(".js-deletingButton");
    deleteButtonElements.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => deleteTask(index));
    });

    const doneButtonElements = document.querySelectorAll(".js-doneButton");
    doneButtonElements.forEach((doneButton, index) => {
      doneButton.addEventListener("click", () => doneTask(index));
    });
  };

  const renderFromArray = () => {
    let listTasks = document.querySelector(".js-list__tasks");
    let newTask = "";

    for (const task of tasks) {
      newTask += `
      <li class="list__item">
      <button class="js-doneButton list__itemButton">
      ${task.isDone ? "&#10003" : ""}
      </button>
      <span class="list__item--span ${task.isDone ? "list__item--done" : ""}" >
      ${task.content}</span>
      <button class="js-deletingButton list__itemButton list__itemButton--delete">&#128465</button>
      </li>`;
    }
    listTasks.innerHTML = newTask;

    connectedButtons();
  };

  const init = () => {
    const addingParagraphElement = document.querySelector(".adding__paragraph");
    addingParagraphElement.addEventListener("submit", e => addingNewTask(e));
  };
  init();
}
