let task = JSON.parse(localStorage.getItem('taskList')) || [];

let taskInput = document.getElementById('taskInput');
let taskButton = document.querySelector('.button');
let taskList = document.getElementById('taskList');

function addTask(){
    const tasks = taskInput.value.trim();

    if (tasks){
        task.push(tasks);
        localStorage.setItem('task', JSON.stringify(task));

        displayTask();

        taskInput.value = '';
    }

    function displayTask(){
        taskList.innerHTML = '';

        tasks.forEach((tasks) => {
            const a = document.createElement('li');
            taskList.textContent = tasks;
            taskList.appendChild(li);
        });
    }

    displayTask();
}