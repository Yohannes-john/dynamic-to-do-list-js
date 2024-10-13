const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');   


addTaskBtn.addEventListener('click',   
 () => {
    const taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent   
 = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';   

    deleteBtn.addEventListener('click', () => {
        newTask.remove();
    });

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value   
 = '';
});
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');   
const taskList = document.getElementById('Add task');   


addTaskBtn.addEventListener('click',   
 () => {
    const taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent   
 = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click',   
 () => {
        newTask.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        newTask.remove();
    });

    newTask.appendChild(completeBtn);
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = '';
});
addTaskBtn.addEventListener('click', () => {
    // Code to add a new task to the list
});
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});
function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent   
 = taskText;

    // Add more task management logic here (e.g., complete, delete buttons)

    taskList.appendChild(newTask);

    taskInput.value = '';
}
