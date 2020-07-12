const express = require('express') //função do javascript que importa arquivos externos
const nunjucks = require('nunjucks')
const videos = require("./data") // './' faz referencia a pasta raiz do projeto

const server = express()

server.use(express.static('public'));

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false, // nao deixa o navegador imprimir códigos HTML enviados ao frontend pela template engine
    noCache: true
})

server.get("/",function(req,res) { //configura a rota principal do site '/'
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        name: "Maik Brito",
        role: "Instrutor - Rocketseat",
        description: 'Programador full-stack, focado em trazer o melhor ensino para inciantes em programação, Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/thalysmcarrara" },
            {name: "Linkedin", url: "https://www.linkedin.com/in/thalys-matias-carrara/" },
            {name: "Instagram", url: "https://www.instagram.com/thalys_matias_carrara/" }
        ]
    }

    return res.render("about",{about:about}) //envia para o front a pagina html e o conteudo a ser preenchido pela template engine.
})

server.get("/portifolio",function(req,res) {

    return res.render("portifolio",{items: videos})
})

server.get("/video",function(req,res){
    const id = req.query.id
    const video = videos.find(function(video){
        return video.id == id
    })
    if(!video){
        return res.send("video not found")
    }

    return res.render("video",{ item: video })
})

server.listen(5000, function(){
    console.log('server is runing')
})