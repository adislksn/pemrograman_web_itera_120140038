// Task class to represent a task
class Task {
    constructor(title, description, date) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.date = date;
    }
}

// TaskManager class to handle task operations
class TaskManager {
    constructor() {
        this.tasks = [];
        this.loadTasks();
    }

    // Load tasks from localStorage
    loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    }

    // Save tasks to localStorage
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Add a new task
    addTask(task) {
        this.tasks.push(task);
        this.saveTasks();
    }

    // Delete a task
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    // Update a task
    updateTask(taskId, updatedTask) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...updatedTask };
            this.saveTasks();
        }
    }

    // Get all tasks
    getAllTasks() {
        return this.tasks;
    }

    // Get task by ID
    getTaskById(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }
}

// Initialize TaskManager
const taskManager = new TaskManager();

// DOM Elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const editTaskModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
const editTaskForm = document.getElementById('editTaskForm');
const saveEditTaskBtn = document.getElementById('saveEditTask');

// Format date for display
const formatDate = (dateString) => {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

// Create task HTML element
const createTaskElement = (task) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'list-group-item task-item d-flex justify-content-between align-items-center';
    taskElement.innerHTML = `
        <div>
            <h5 class="mb-1">${task.title}</h5>
            <p class="task-description mb-1">${task.description}</p>
            <small class="task-date">${formatDate(task.date)}</small>
        </div>
        <div class="task-actions">
            <button class="btn btn-sm btn-outline-primary btn-icon edit-task" data-id="${task.id}">
                <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger btn-icon delete-task" data-id="${task.id}">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `;
    return taskElement;
};

// Render all tasks
const renderTasks = () => {
    taskList.innerHTML = '';
    taskManager.getAllTasks().forEach(task => {
        taskList.appendChild(createTaskElement(task));
    });
};

// Handle form submission
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const date = document.getElementById('taskDate').value;

    const newTask = new Task(title, description, date);
    taskManager.addTask(newTask);
    
    // Clear form
    taskForm.reset();
    
    // Re-render tasks
    renderTasks();
});

// Handle task deletion
taskList.addEventListener('click', async (e) => {
    if (e.target.closest('.delete-task')) {
        const taskId = parseInt(e.target.closest('.delete-task').dataset.id);
        taskManager.deleteTask(taskId);
        renderTasks();
    }
});

// Handle task editing
taskList.addEventListener('click', async (e) => {
    if (e.target.closest('.edit-task')) {
        const taskId = parseInt(e.target.closest('.edit-task').dataset.id);
        const task = taskManager.getTaskById(taskId);
        
        if (task) {
            // Populate modal with task data
            document.getElementById('editTaskId').value = task.id;
            document.getElementById('editTaskTitle').value = task.title;
            document.getElementById('editTaskDescription').value = task.description;
            document.getElementById('editTaskDate').value = task.date;
            
            // Show modal
            editTaskModal.show();
        }
    }
});

// Handle save edit
saveEditTaskBtn.addEventListener('click', () => {
    const taskId = parseInt(document.getElementById('editTaskId').value);
    const updatedTask = {
        title: document.getElementById('editTaskTitle').value,
        description: document.getElementById('editTaskDescription').value,
        date: document.getElementById('editTaskDate').value
    };

    taskManager.updateTask(taskId, updatedTask);
    editTaskModal.hide();
    renderTasks();
});

// Initial render
renderTasks(); 