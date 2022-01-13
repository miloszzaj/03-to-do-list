{
  let tasks = [];
  let hideDoneTasks = false;

  const addingNewTask = e => {
    e.preventDefault();
    const inputElement = document.querySelector(".js-addingInput");
    inputElement.focus();
    let task = inputElement.value.trim();
    inputElement.value = "";

    if (!task) {
      return;
    }

    tasks = [...tasks, { content: task, isDone: false }];

    // tasks.push({
    //   content: task,
    //   isDone: false,
    // });

    render();
  };
  const deleteTask = index => {
    tasks.splice(index, 1);
    render();
  };

  const setTaskDone = index => {
    // tasks=tasks.map(tasks[index].isDone => )
    tasks[index].isDone = !tasks[index].isDone;
    render();
  };
  const bindButtons = () => {
    const deleteButtonElements =
      document.querySelectorAll(".js-deletingButton");
    deleteButtonElements.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => deleteTask(index));
    });

    const doneButtonElements = document.querySelectorAll(".js-doneButton");
    doneButtonElements.forEach((doneButton, index) => {
      doneButton.addEventListener("click", () => setTaskDone(index));
    });
  };

  const renderTasks = () => {
    let listTasks = document.querySelector(".js-list__tasks");
    let newTask = "";

    for (const task of tasks) {
      newTask += `
      <li class="list__item">
      <button class="js-doneButton list__itemButton">
      ${task.isDone ? "&#10003" : ""}
      </button>
      <span class="list__item--span ${task.isDone ? "list__item--done" : ""}">
      ${task.content}
      </span>
      <button class="js-deletingButton list__itemButton list__itemButton--delete">&#128465</button>
      </li>`;
    }
    listTasks.innerHTML = newTask;
  };

  const renderButtons = () => {
    const buttonsWrapper = document.querySelector(".js-buttonsWrapper");
    if (tasks) {
      buttonsWrapper.innerHTML = `<button class="list__headerButton list__headerButton-hide js-hideButton">Ukryj ukończone</button>
            <button class="list__headerButton list__headerButton-complete js-completeButton">Ukończ wszystkie</button>`;
    }
    const hideButton = document.querySelector(".js-hideButton");
    const completeButton = document.querySelector(".js-completeButton");
    hideButton.addEventListener("click", () => {
      hideDoneTasks = !hideDoneTasks;
      console.log("hideButton", hideDoneTasks);
      if (!hideDoneTasks) {
      }
    });

    completeButton.addEventListener("click", (e, task, index) => {
      e.preventDefault();
      if (task.isDone) {
        console.log("completeButton");
        // newTask.classList.toggle("toggleClass");
      }
    });
  };

  const bindButtonsEvents = () => {};

  const render = () => {
    renderTasks();
    renderButtons();
    bindButtons();
  };

  const init = () => {
    const addingParagraphElement = document.querySelector(".adding__paragraph");
    addingParagraphElement.addEventListener("submit", e => addingNewTask(e));
  };
  init();
}
