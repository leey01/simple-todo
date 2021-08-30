// Selection
const addTodoBtn = document.getElementById('addTodoBtn');
const inputField = document.getElementById('inputField');
const todoContainer = document.getElementById('todoContainer');

// addEventListener
addTodoBtn.addEventListener('click', function(){
    const paragraf = document.createElement('p');
    paragraf.classList.add('paragraf-styling');
    paragraf.innerText = inputField.value;
    todoContainer.appendChild(paragraf);
    inputField.value = '';
    paragraf.addEventListener('click', function(){
        paragraf.style.textDecoration = "line-through";
    })
    paragraf.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraf);
    })
})