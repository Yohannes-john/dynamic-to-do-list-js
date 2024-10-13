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
