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
    tasks[index].isDone = !tasks[index].isDone;

    // tasks = [
    //   ...tasks.slice(0, index),
    //   { ...tasks[index], done: !tasks[index].done },
    //   ...tasks.slice(index + 1),
    // ];
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

  // renderowanie widoku

  const renderTasks = () => {
    const taskToHTML = task => `
    <li class="list__item ${
      task.isDone && hideDoneTasks ? "list__item--hidden" : ""
    }">
      <button class="js-doneButton list__itemButton">
      ${task.isDone ? "&#10003" : ""}
      </button>
      <span class="list__item--span ${task.isDone ? "list__item--done" : ""}">
      ${task.content}
      </span>
      <button class="js-deletingButton list__itemButton list__itemButton--delete">&#128465</button>
      </li>`;

    let listTasks = document.querySelector(".js-list__tasks");
    listTasks.innerHTML = tasks.map(taskToHTML).join("");
    // let newTask = "";

    // for (const task of tasks) {
    //   newTask += `
    //   <li class="list__item js-toggleVisibility">
    //   <button class="js-doneButton list__itemButton">
    //   ${task.isDone ? "&#10003" : ""}
    //   </button>
    //   <span class="list__item--span ${task.isDone ? "list__item--done" : ""}">
    //   ${task.content}
    //   </span>
    //   <button class="js-deletingButton list__itemButton list__itemButton--delete">&#128465</button>
    //   </li>`;
    // }
    // listTasks.innerHTML = newTask;
  };

  // wszystkie ukończone

  const setAllDone = () => {
    tasks = tasks.map(task => ({ ...task, isDone: true }));
    // tasks = tasks.map(task => (task.isDone = true));

    console.log(setAllDone);
    render();
  };

  // odznaczanie ukończenia

  const toggleHideDoneTask = () => {
    hideDoneTasks = !hideDoneTasks;
    console.log("hideButton", hideDoneTasks);
    render();
  };

  // wytworzenie przycisków w HTML

  const renderButtons = () => {
    const buttonsWrapper = document.querySelector(".js-buttonsWrapper");
    if (tasks) {
      buttonsWrapper.innerHTML = `<button class="list__headerButton list__headerButton-hide js-hideButton">${
        hideDoneTasks ? "Pokaż" : "Ukryj"
      } ukończone</button>
            <button class="list__headerButton list__headerButton-complete js-completeButton">${
              tasks.every(({ isDone }) => isDone) ? "disabled" : ""
            } Ukończ wszystkie</button>`;
    }
  };

  // wiązanie przycisków do JavaScriptu i uruchomnienie zdarzeń

  const bindButtonsEvents = () => {
    const hideButton = document.querySelector(".js-hideButton");
    hideButton.addEventListener("click", toggleHideDoneTask);
    const completeButton = document.querySelector(".js-completeButton");
    completeButton.addEventListener("click", setAllDone);
  };

  const render = () => {
    renderTasks();
    renderButtons();
    bindButtons();
    bindButtonsEvents();
  };

  const init = () => {
    const addingParagraphElement = document.querySelector(".adding__paragraph");
    addingParagraphElement.addEventListener("submit", e => addingNewTask(e));
  };
  init();
}
