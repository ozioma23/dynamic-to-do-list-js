document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');// Button to add a new task
    const taskInput = document.getElementById('task-input');// Input field to enter a task
    const taskList = document.getElementById('task-list');// List to display tasks



 // Function to load tasks from Local Storage
 function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get tasks from Local Storage
    storedTasks.forEach(taskText => addTask(taskText, false)); // Load each task to the DOM
}


    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();


        // Check if taskText is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new <li> element and set its textContent to taskText
        const newTask = document.createElement('li'); // Create a new list item
        newTask.textContent = taskText;  //Set the task text
        newTask.classList.add('task-item'); // Add class to list item for styling

         // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';// Set the button text
        removeButton.className = 'remove-btn'; // Add class for styling


        // Assign an onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(newTask); // Removes the <li> element from the list
        };

        // Append the remove button to the <li> element
        newTask.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
      // Function to save a task to Local Storage
      function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get the current tasks from Local Storage
        storedTasks.push(taskText); // Add the new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated tasks back to Local Storage
    }

     // Function to remove a task from Local Storage
     function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get the current tasks from Local Storage
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Filter out the task to be removed
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save the updated tasks back to Local Storage
    }


    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

     // Load tasks from Local Storage when the page loads
    loadTasks();
});