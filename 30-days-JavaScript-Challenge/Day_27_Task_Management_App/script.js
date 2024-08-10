document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('editTaskBtn').addEventListener('click', saveTask);

let tasks = [];
let currentTaskIndex = null;

function addTask() {
    const title = document.getElementById('title').value;
    const dueDate = document.getElementById('dueDate').value;
    const description = document.getElementById('description').value;

    const task = {
        title,
        dueDate,
        description
    };

    tasks.push(task);
    filterTasks();
    clearForm();
}

function displayTasks() {
    const tasksContainer = document.getElementById('tasksContainer');
    tasksContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p><strong>Due Date:</strong> ${task.dueDate}</p>
            <p>${task.description}</p>
            <div class="task-actions">
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        tasksContainer.appendChild(taskItem);
    });
}

function editTask(index) {
    currentTaskIndex = index;
    const task = tasks[index];

    document.getElementById('title').value = task.title;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('description').value = task.description;

    document.getElementById('addTaskBtn').style.display = 'none';
    document.getElementById('editTaskBtn').style.display = 'block';
}

function saveTask() {
    const title = document.getElementById('title').value;
    const dueDate = document.getElementById('dueDate').value;
    const description = document.getElementById('description').value;

    tasks[currentTaskIndex] = {
        title,
        dueDate,
        description
    };

    currentTaskIndex = null;
    filterTasks();
    clearForm();

    document.getElementById('addTaskBtn').style.display = 'block';
    document.getElementById('editTaskBtn').style.display = 'none';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function filterTasks() {
    const today = new Date().toISOString().split('T')[0];
    tasks = tasks.filter(task => task.dueDate >= today);
    displayTasks();
}

function clearForm() {
    document.getElementById('taskForm').reset();
}
