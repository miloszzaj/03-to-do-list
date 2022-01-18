{
  //  stan
  let tasks = [];
  let hideDoneTasks = false;

  // dodawanie nowego zadania

  const addNewTask = e => {
    e.preventDefault();
    const inputElement = document.querySelector(".js-addingInput");
    inputElement.focus();
    let task = inputElement.value.trim();
    inputElement.value = "";
    if (!task) {
      return;
    }
    tasks = [...tasks, { content: task, isDone: false }];
    render();
  };

  // usuwanie zadania

  const deleteTask = index => {
    tasks = [...tasks.slice(0, index), ...tasks.splice(index + 1)];
    render();
  };

  // oznaczania zadania jako wykonane

  const toggleTaskDone = index => {
    tasks = [
      ...tasks.slice(0, index),
      { ...tasks[index], isDone: !tasks[index].isDone },
      ...tasks.slice(index + 1),
    ];
    console.log("tasks array", tasks);
    render();
  };

  // wiązanie przycisków z konkretnego zadania do JavaScriptu i uruchomnienie zdarzeń po naciśnięciu

  const bindButtons = () => {
    const deleteButtonElements =
      document.querySelectorAll(".js-deletingButton");
    deleteButtonElements.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => deleteTask(index));
    });

    const doneButtonElements = document.querySelectorAll(".js-doneButton");
    doneButtonElements.forEach((doneButton, index) => {
      doneButton.addEventListener("click", () => toggleTaskDone(index));
    });
  };

  // renderowanie widoku wszystkich zadań

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
  };

  // wszystkie ukończone

  const setAllDone = () => {
    tasks = tasks.map(task => ({ ...task, isDone: true }));
    render();
  };

  // odznaczanie ukończenia

  const toggleHideDoneTask = () => {
    hideDoneTasks = !hideDoneTasks;
    render();
  };

  // podpięcie stworzonych w JS przycisków do drzewa DOM

  const renderButtons = () => {
    const buttonsWrapper = document.querySelector(".js-buttonsWrapper");
    if (tasks) {
      buttonsWrapper.innerHTML = `
      <button class="list__headerButton js-hideButton">
      ${hideDoneTasks ? "Pokaż" : "Ukryj"} 
      ukończone</button>
      <button class="list__headerButton js-completeButton"
      ${tasks.every(({ isDone }) => isDone) ? "disabled" : ""}> 
      Ukończ wszystkie
      </button>`;
    }
  };

  // wiązanie przycisków z nagłówka do JavaScriptu i uruchomnienie zdarzeń po naciśnięciu

  const bindButtonsEvents = () => {
    const hideButton = document.querySelector(".js-hideButton");
    hideButton.addEventListener("click", toggleHideDoneTask);
    const completeButton = document.querySelector(".js-completeButton");
    completeButton.addEventListener("click", setAllDone);
  };

  // podstawowe funkcje

  const render = () => {
    renderTasks();
    renderButtons();
    bindButtons();
    bindButtonsEvents();
  };

  const init = () => {
    const addingParagraphElement = document.querySelector(".adding__paragraph");
    addingParagraphElement.addEventListener("submit", e => addNewTask(e));
  };
  init();
}
