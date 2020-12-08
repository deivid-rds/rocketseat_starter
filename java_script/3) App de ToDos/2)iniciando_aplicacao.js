var listElement  = document.querySelector('#app ul');
var inputElement  = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JS',
    'Participar da comunidade da Rocketseat'
];

function renderToDos() {

    listElement.innerHTML = '';
    
    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderToDos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderToDos();
}

buttonElement.onclick = addTodo;