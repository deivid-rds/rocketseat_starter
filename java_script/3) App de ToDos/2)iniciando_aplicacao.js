var listElement  = document.querySelector('#app ul');
var inputElment  = document.querySelector('#app input');
var buttonElment = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JS',
    'Participar da comunidade da Rocketseat'
];

function renderToDos() {
    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderToDos();