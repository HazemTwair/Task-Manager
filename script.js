const tasksDiv = document.querySelector(".tasks");
const taskInput = document.getElementById("taskInput");

function handleAdded() {
  const taskTitle = taskInput.value.trim();

  if (taskTitle == "") {
    alert("Please enter a new task.");
  } else {
    const taskTemplateDiv = document.getElementById("taskTemplate");
    const newTaskDiv = taskTemplateDiv.cloneNode(true);
    newTaskDiv.removeAttribute("id");
    newTaskDiv.classList.remove("none");
    newTaskDiv.querySelector("span").innerText = taskTitle;

    tasksDiv.appendChild(newTaskDiv);
  }
  taskInput.value = "";
}

taskInput.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    handleAdded();
    taskInput.blur();
  }
});

function handleCompleted(completeBtn) {
  completeBtn.closest(".task").querySelector("span").classList.add("crossed");
  completeBtn.classList.add("crossed");
  completeBtn.nextElementSibling.classList.add("crossed");
}

function handleRemoved(removeBtn) {
  tasksDiv.removeChild(removeBtn.closest(".task"));
}
