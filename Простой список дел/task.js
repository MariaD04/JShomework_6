const tasksList = document.querySelector('.tasks__list');

document.addEventListener('keydown', (event) => {  
    if (event.key == 'Enter') {
        let taskInput = (document.getElementById('task__input')).value;

        if (taskInput != '' && taskInput.trim() != '') {
            let element = document.createElement('div');
            element.className = 'task';

            element.innerHTML += `
                <div class="task__title">
                ${taskInput}
                </div>
                <a href="#" class="task__remove">&times;</a>
            `;
            tasksList.insertAdjacentElement('afterbegin', element);

            let link = element.querySelector('.task__remove');
            link.addEventListener('click', () => {
                let task = link.closest('div');
                task.remove();
            })
        }
        document.getElementById('task__input').value = '';
    }   
})
