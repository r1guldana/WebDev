const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        taskDiv.classList.toggle('completed');
    });

    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.addEventListener('click', () => {
        taskDiv.remove();
    });

    taskDiv.append(checkbox, textSpan, deleteBtn);
    taskList.appendChild(taskDiv);

    taskInput.value = '';
    taskInput.focus();
}
