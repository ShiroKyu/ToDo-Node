let formulario = document.querySelector('form#adicionarTodo')

let todoInput = document.querySelector('input.addtodo')
let todo_area = document.querySelector('.todo-area')

let aaa = document.createElement('form')
console.log(aaa)

let todo = ''

formulario.addEventListener('submit', e => {
    todo = todoInput.value

    e.preventDefault()

    let newForm = document.createElement('form')
    let newInput = document.createElement('input')
    let delBtn = document.createElement('button')

    newForm.classList.toggle('resultForm')

    //Configurando o input
    newInput.classList.toggle('resultTodo')
    newInput.type = 'text'
    newInput.value = todo
    newInput.disabled = true

    //Configurando o button
    delBtn.classList.toggle('btn-submit')
    delBtn.type = 'button'

    let trashImg = document.createElement('img')
    trashImg.src = 'assets/trash.svg'
    trashImg.width = '20'

    delBtn.appendChild(trashImg)

    newForm.appendChild(newInput)
    newForm.appendChild(delBtn)
    todo_area.appendChild(newForm)

    //Configurando botão de excluir toDo
    delBtn.addEventListener('click', e => {
        newForm.remove()
    })
})