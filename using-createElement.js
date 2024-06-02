let addTaskBtn = document.getElementById("addTask");

addTaskBtn.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskTitle = taskInput.value.trim();

  if (taskTitle == "") {
    alert("Please enter a new task.");
  } else {
    const tasksDiv = document.querySelector(".tasks");
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task");

    const span = document.createElement("span");
    const spanTxt = document.createTextNode(taskTitle);
    span.appendChild(spanTxt);
    taskDiv.appendChild(span);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "actions");

    const completeBtn = document.createElement("button");
    completeBtn.setAttribute("class", "complete");
    const completeBtnTxt = document.createTextNode("Complete");
    completeBtn.appendChild(completeBtnTxt);

    completeBtn.addEventListener("click", function () {
      this.closest(".task").querySelector("span").classList.add("crossed");
      this.classList.add("crossed");
      this.nextElementSibling.classList.add("crossed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    const removeBtnTxt = document.createTextNode("Remove");
    removeBtn.appendChild(removeBtnTxt);

    removeBtn.addEventListener("click", function () {
      tasksDiv.removeChild(this.closest(".task"));
    });

    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(removeBtn);

    taskDiv.appendChild(buttonsDiv);

    tasksDiv.append(taskDiv);
  }
  taskInput.value = "";
});