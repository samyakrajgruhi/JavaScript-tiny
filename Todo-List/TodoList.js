let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

if(todoList != []){
    display();
}

function saveToStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}

function addToList(){
    const todo = document.querySelector('.js-input').value;
    if(todo === ''){
        return
    }
    const dueDate = document.querySelector('.js-input-date').value;

    todoList.push({
        todo,
        dueDate
    });
    
    display();
    saveToStorage();

    document.querySelector('.js-input').value = '';
}

function display(){
    const todoListHTML = '';
    for(let i=0; i<todoList.length; i++){
        const todoObject = todoList[i]
        const {todo,dueDate} = todoObject;
        const html = 
        `<div class="todo-div">
            <span>${todo}</span> 
            <span>${dueDate}</span>
            <button class="delete-button" onclick="
                todoList.splice(${i},1);
                display();
                saveToStorage();
            ">Delete</button>
        </div>`;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-display').innerHTML = todoListHTML;
}




