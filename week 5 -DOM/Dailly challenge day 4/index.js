
const form = document.getElementById("form");
const ul = document.getElementById("list-tasks");
const clearButton = document.getElementById("clear");


form.addEventListener("submit",handleSubmit);
clearButton.addEventListener("click", clearPage);
let tasks = [];
let id = 0;

function clearPage(){
  tasks = [];
  renderTasks(tasks); 
  form.reset();
}

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const  taskText = formData.get("task");
    if (taskText === "") return;
    const task = generateTask(taskText);
    tasks.push(task);
    renderTasks(tasks);
    form.reset();
}

function renderTasks(tasks){
ul.innerHTML = "";


for (const task of tasks) {
const li = generateLi(task);
ul.append(li);
  }
} 

function generateLi(task) {
  const li = document.createElement("li");
  li.dataset.id = task.id;
  
  const xMark = document.createElement("i");
  xMark.classList.add("fa-solid","fa-xmark");
  xMark.addEventListener("click", function () {   
    deleteTask (task.id);
  });

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type","checkbox");
  checkbox.setAttribute("id","checbox-" + task.id);
  checkbox.checked = task.done;
  checkbox.addEventListener("click",function() {
  markTaskDone(task);
});
  const span = document.createElement("label");
  span.setAttribute("for","checkbox-"+ task.id);
  span.innerText = task.text;

  li.append(xMark, checkbox, span);
  return li;
}

function deleteTask(id){
  const newTasks = tasks.filter(function(task){
    return task.id !=id;
  });
  tasks = newTasks;
  renderTasks(tasks);
}

function markTaskDone(task) {
  const li = document.querySelector(`[data.id='${task.id}']`);
  li?.classList.toggle("is done");
 task.done = !task.done;
}

function generateTask(text){
  const task ={
    text,
    id,
    done: false
  };
  id++;
  return task;
}













