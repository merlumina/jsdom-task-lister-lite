document.addEventListener("DOMContentLoaded", () => {

  const taskFormSubmitBtn = document.getElementById("new-task-submit-btn");
  const taskDescription = document.getElementById("new-task-description");
  const taskUL = document.getElementById("tasks");

  taskFormSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const newTask = document.createElement("li");
    newTask.innerText = taskDescription.value;
    taskUL.append(newTask);
    
  });

});
