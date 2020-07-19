const express = require('express') //função do javascript que importa arquivos externos
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()

server.use(express.static('public'));
server.use(routes)
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false, // nao deixa o navegador imprimir códigos HTML enviados ao frontend pela template engine
    noCache: true
})



server.listen(5000, function(){
    console.log('server is runing')
})