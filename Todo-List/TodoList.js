let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

if(todoList != []){
    display();
}

// Function to save in Local Storage to prevent reseting on page refresh //

function saveToStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}

// Function To Add Tasks in Todo List //

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

// Function to Display the TodoCurrent TodoList //

function display(){
    let todoListHTML = '';
    todoList.forEach(function(todoObject,index){
        const {todo,dueDate} = todoObject;
        const html = 
        `<div class="todo-div">
            <span>${todo}</span> 
            <span>${dueDate}</span>
            <button class="delete-button" onclick="
                todoList.splice(${index},1);
                display();
                saveToStorage();
            ">Delete</button>
        </div>`;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-display').innerHTML = todoListHTML;
}




