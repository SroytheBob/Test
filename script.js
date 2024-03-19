document.getElementById('addTask').addEventListener('click', function() {
    const taskDescription = document.getElementById('taskDescription').value.trim();
    const assignee = document.getElementById('assignee').value;

    if (taskDescription === '' || assignee === '') {
        alert('Please enter a task description and select an assignee.');
        return;
    }

    const taskList = document.getElementById('taskList');
    
    // Create task item
    const taskItem = document.createElement('li');
    taskItem.className = 'taskItem';
    
    // Task content
    const content = document.createTextNode(`${taskDescription} - Assigned to ${assignee}`);
    
    // Done button
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    
    doneButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
        // Additional logic for handling the completion of tasks can be added here
    });
    
    taskItem.appendChild(content);
    taskItem.appendChild(doneButton);
    
    taskList.appendChild(taskItem);
    
    // Clear form fields
    document.getElementById('taskDescription').value = '';
    document.getElementById('assignee').value = '';
});
