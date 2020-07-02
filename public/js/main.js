let formulario = document.querySelector('form#adicionarTodo')
let todoInput = document.querySelector('input.addtodo')
let todo_area = document.querySelector('.todo-area')


let todo = ''
formulario.addEventListener('submit', (e) => {
    todo = todoInput.value
    console.log(todo)
    e.preventDefault()

    let newForm = document.createElement('form')
    let newInput = document.createElement('input')
    let newBtn = document.createElement('button')

    //Configurando o input
    newInput.classList.toggle('resultTodo')
    newInput.type = 'text'
    newInput.value = todo
    newInput.disabled = true

    //COnfigurando o button
    newBtn.classList.toggle('resultBtn')


    newForm.appendChild(newInput)
    todo_area.appendChild(newForm)
})