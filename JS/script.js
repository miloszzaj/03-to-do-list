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
    [...tasks.splice(index, 1)];
    render();
  };

  const setTaskDone = index => {
    tasks = [
      ...tasks.slice(0, index),
      { ...tasks[index], done: !tasks[index].done },
      ...tasks.slice(index + 1),
    ];
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
      <li class="list__item js-toggleVisibility">
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

  // wszystkie ukończone

  const setAllDone = () => {
    tasks = tasks.map(task => ({...task, isDone = true}));
        // tasks = tasks.map(task => (task.isDone = true));

    console.log(setAllDone);
    render();
  };

  // odznaczanie ukończenia

  const toggleHideDoneTask = () => {
    hideDoneTasks = !hideDoneTasks;
      console.log("hideButton", hideDoneTasks);
      render()
  }

  const renderButtons = () => {
    const buttonsWrapper = document.querySelector(".js-buttonsWrapper");
    if (tasks) {
      buttonsWrapper.innerHTML = `<button class="list__headerButton list__headerButton-hide js-hideButton">Ukryj ukończone</button>
            <button class="list__headerButton list__headerButton-complete js-completeButton">Ukończ wszystkie</button>`;
    }
    const hideButton = document.querySelector(".js-hideButton");
    const completeButton = document.querySelector(".js-completeButton");

    hideButton.addEventListener("click", () => {
      const listItemDone = document.querySelector(".list__item--done");
      const toggleVisibilityElement = document.querySelector(
        ".js-toggleVisibility"
      );

      const cos = tasks.map(({ isDone }) => `<li>${isDone}</li>`);
      console.log(cos);

      hideDoneTasks = !hideDoneTasks;
      console.log("hideButton", hideDoneTasks);
      if (!hideDoneTasks) {
        console.log(toggleVisibilityElement);
        let finishedTasks = tasks.filter(({ isDone }) => isDone);
        // finishedTasks = [...finishedTasks, { hideDoneTasks }];
        console.log(finishedTasks);
      }
    });

    // completeButton.addEventListener("click", (e, task, index) => {
    //   e.preventDefault();
    //   if (task.isDone) {
    //     console.log("completeButton");
    //     // newTask.classList.toggle("toggleClass");
    //   }
    // });
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
