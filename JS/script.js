{
  const tasks = [];

  const addingNewTask = e => {
    e.preventDefault();
    const inputElement = document.querySelector(".js-addingInput");
    let task = inputElement.value.trim();
    if (task === "") {
      return;
    }

    tasks.push({
      content: task,
      isDone: false,
    });

    renderFromArray();
  };

  const renderFromArray = () => {
    let listTasks = document.querySelector(".js-list__tasks");
    let newTask = "";

    for (const task of tasks) {
      newTask += `<li class="newTaskLine"><button class="js-doneButton">wykonane</button><span ${
        task.isDone ? 'style="text-decoration: line-through"' : ""
      } class="js-spanTask">${
        task.content
      }</span><button class="js-deletingButton">kasuj</button></li>`;
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

    const doneTask = index => {
      const spanTest = document.querySelectorAll(".js-spanTask");
      console.log(spanTest);

      // tasks[index].content.classList.add("doneTest");
      console.log(tasks[index].content);
    };

    const doneButtonElements = document.querySelectorAll(".js-doneButton");
    doneButtonElements.forEach((doneButton, index) => {
      console.log(doneButton);
      doneButton.addEventListener("click", () => doneTask(index));
    });
  };

  const init = () => {
    const addButtonElement = document.querySelector(".js-addButton");
    addButtonElement.addEventListener("click", e => addingNewTask(e));
  };
  init();
}
