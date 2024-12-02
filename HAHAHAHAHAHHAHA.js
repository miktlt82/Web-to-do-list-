document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Введите задачу!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.textContent = taskText;

    // Создаем кнопку для удаления задачи
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    
    // Добавляем обработчик для отметки задачи как выполненной
    li.onclick = function() {
        li.classList.toggle('completed');
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    taskInput.value = ''; // Очищаем поле ввода
}
