const express = require('express')
const app = express()

const mongoose = require('mongoose')

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



//Rotas

app.get('/', (req, res) => {
    res.render('./views/index.html')
})



app.listen(3000, () => {
    console.log('Servidor rodando')
})