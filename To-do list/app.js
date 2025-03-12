document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById('add-task');
    const taskInput = document.getElementById('task');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    const pendingTab = document.getElementById('pending-tab');
    const completedTab = document.getElementById('completed-tab');
    const pendingTasksContainer = document.getElementById('pending-tasks-list');
    const completedTasksContainer = document.getElementById('completed-tasks-list');

    // Add active class to Pending Tab by default
    pendingTab.classList.add('active');

    // Switch between tabs
    pendingTab.addEventListener('click', function() {
        pendingTasksContainer.style.display = 'block';
        completedTasksContainer.style.display = 'none';
        pendingTab.classList.add('active');
        completedTab.classList.remove('active');
    });

    completedTab.addEventListener('click', function() {
        pendingTasksContainer.style.display = 'none';
        completedTasksContainer.style.display = 'block';
        completedTab.classList.add('active');
        pendingTab.classList.remove('active');
    });

    // Function to create new task with delete and complete buttons
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        const date = new Date().toLocaleString(); // Date and time for each task

        li.innerHTML = `${taskText} <small>(${date})</small>`;

        // Complete Button
        const completeBtn = document.createElement('button');
        completeBtn.innerText = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => {
            li.classList.add('completed');
            completedTasksList.appendChild(li);
            li.removeChild(completeBtn);
        });

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        return li;
    }

    // Add new task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskElement(taskText);
            pendingTasksList.appendChild(taskItem);
            taskInput.value = ""; // Clear the input field
        }
    });
});
