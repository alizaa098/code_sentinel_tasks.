const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  const span = document.createElement('span');
  span.textContent = text;
  span.className = "taskText";

  const delBtn = document.createElement('button');
  delBtn.textContent = "×";
  delBtn.className = "deleteBtn";
  delBtn.onclick = () => li.remove();

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") addTask();
});
