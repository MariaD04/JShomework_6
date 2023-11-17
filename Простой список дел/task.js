const tasksList = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');
const taskInput = document.getElementById('task__input');

button.addEventListener('click', (event) => { 
    event.preventDefault();

    if (taskInput.value.trim() != '') {
        let element = document.createElement('div');
        element.className = 'task';

        element.innerHTML += `
            <div class="task__title">
            ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `;
        tasksList.insertAdjacentElement('afterbegin', element);

        let link = element.querySelector('.task__remove');
        link.addEventListener('click', () => {
            let task = link.closest('div');
            task.remove();
        })
    
    taskInput.value = '';
    }   
})
