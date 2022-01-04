{
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
      newTask += `<li class="newTaskLine"><button>wykonane</button>${task.content}<button class="js-deletingButton">kasuj</button></li>`;
    }

    listTasks.innerHTML = newTask;
    const deleteButtonElements =
      document.querySelectorAll(".js-deletingButton");
    deleteButtonElements.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        tasks.splice(index, 1);
        renderFromArray();
      });
    });
  };

  const init = () => {
    const addButtonElement = document.querySelector(".js-addButton");
    addButtonElement.addEventListener("click", e => addingNewTask(e));
  };
  init();
}
