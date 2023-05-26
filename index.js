// Selecting HTML elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


// Event listener for form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); //Prevent form submission

    const taskText = taskInput.value.trim(); // Get task text

    if (taskText !== '') {
        addTask(taskText); // Add task to the list
        taskInput.value = ''; //Clear input field
        taskInput.focus(); // Set focus back to input field
    }
});


function addTask(text) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
    ${text}
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
    `;

    const  deleteBtn = taskItem.querySelector('.delete-btn');

    deleteBtn.addEventListener('click', function() {
        taskItem.remove(); //Delete the task
    });

    const editBtn = taskItem.querySelector('.edit-btn');
    editBtn.addEventListener('click', function() {
        const newText = prompt('Enter new task text:', text);
        if (newText !== null && newText.trim() !== '') {
            taskItem.firstChild.textContent = newText; // Update task text
        }
    });

    taskList.appendChild(taskItem); // Add task to the list
}
 