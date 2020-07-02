const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('./models/ToDo.js')
const ToDo = mongoose.model('toDos')

//Configurando view engine
const nunjucks = require('nunjucks')
nunjucks.configure('./views', {
    express: app,
    //Recarregar o template toda vez, não usar cache
    noCache: true
})

// Configurar pasta pública
app.use(express.static('./public'))


//Permite que sejam pegos os dados do formulário em uma requisição atraves do body
//Habilitar o uso do req.body
app.use(express.urlencoded({
    extended: true
}))

//MongoDB

mongoose.connect('mongodb://localhost/toDo', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Conectado ao mongo')
    })
    .catch(e => {
        console.log('Erro')
    })


//Rotas

app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/newTodo', (req, res) => {

    new ToDo({
            descricao: req.body.name
        }).save()
        .then(() => {
            console.log('Sucesso!')
        })
        .catch(err => {
            console.log(err)
        })

})

app.listen(3000, () => {
    console.log('Servidor rodando')
})