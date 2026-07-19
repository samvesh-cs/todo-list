let taskInput = document.querySelector(".task-input");
let taskContainer = document.querySelector(".task-container");
let incompleteTaskContainer = document.querySelector(".incomplete");
let completeTaskContainer = document.querySelector(".complete");
let newTaskContainers = document.querySelectorAll(".newTaskContainer");
let clearBtn = document.querySelector(".clearBtn");

let idCount = Number(localStorage.getItem("idCount")) || 0;
let data = JSON.parse(localStorage.getItem("data")) || [];

renderTask();
function changeLook() {
  if (data.length < 1) {
    taskContainer.classList.add("task-container-initial");
  } else {
    taskContainer.classList.remove("task-container-initial");
  }
}

function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("idCount", idCount);
}

function addTask() {
  let task = {
    id: idCount,
    description: taskInput.value.trim(),
    done: false,
  };
  data.push(task);
  idCount++;
  taskInput.value = "";
  saveData();
  renderTask();
}

function renderTask() {
  completeTaskContainer.innerHTML = "<p>Completed</p>";
  incompleteTaskContainer.innerHTML = "";

  for (const task of data) {
    let newTaskContainer = document.createElement("div");
    let newTask = document.createElement("p");
    let deleteBtn = document.createElement("button");

    newTaskContainer.classList.add("newTaskContainer");

    if (task.done == true) {

      newTaskContainer.innerHTML = `
    <button value = "toggle" btnid =${task.id} btn-action = "toggle" class="Btn"><i class="ri-checkbox-line"></i></button>
    <span style="text-decoration:line-through;">${task.description}</span>
    <button value = "delete" btnid =${task.id}  btn-action = "delete" class="Btn"><i class="ri-close-large-line"></i></button>
    `;
      newTaskContainer.classList.toggle("selected");

      completeTaskContainer.append(newTaskContainer);
    } else {
      newTaskContainer.innerHTML = `
    <button value = "toggle" btnid =${task.id} btn-action = "toggle" class="Btn"><i class="ri-checkbox-blank-line"></i></button>
    <span class="description-span">${task.description}</span>

    <button value = "delete" btnid =${task.id}  btn-action = "delete" class="Btn"><i class="ri-close-large-line"></i></button>
    `;


      incompleteTaskContainer.append(newTaskContainer);
    }
  }
  changeLook();
}

function deleteTask(id) {
  data = data.filter((task) => task.id !== id);

  saveData();
  renderTask();
}

function changeStatus(id) {
  data = data.map((task) => {
    if (task.id === id) {
      task.done = !task.done;
    }

    return task;
  });

  saveData();
  renderTask();
}

function clearTask() {
  idCount = Number(0);
  data = [];
  saveData();
  renderTask();
}

taskContainer.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (btn == null) {
    return;
  }
  const btnId = Number(btn.getAttribute("btnid"));
  const action = btn.getAttribute("btn-action");

  if (action == "delete") {
    deleteTask(btnId);
  } else if (action == "toggle") {
    changeStatus(btnId);
  }
});

taskInput.addEventListener("keydown", (event) => {
  if (event.code === "Enter" && taskInput.value.trim() !== "") {
    event.preventDefault();
    addTask();
  }
});

clearBtn.addEventListener("click", () => {
  clearTask();
});
