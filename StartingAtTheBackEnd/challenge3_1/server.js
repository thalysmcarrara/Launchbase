const express = require('express')
const nunjucks = require('nunjucks')
const dataCourses = require('./dataCourses')
const dataHeader = require('./dataHeader')
const dataAbout = require('./dataAbout')
const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express: server})

server.get("/courses",function(req,res){
    
    return res.render("content",{dataCourses,dataHeader})
})

server.get("/about",function(req,res){
    return res.render("about",{data: dataAbout,dataHeader}) // abreviação do {data: data} como o atributo e o objeto passado tem o mesmo nome o javascript entende essa abreviação
})

server.get('/courses/:id',function(req,res){
    const id = req.params.id
    console.log(id)
    const page = dataCourses.cursos.find(function(course){
        if(id == course.id){
            return true
        }
    })
    if(!page){
        return res.render("not-found")
    }
    return res.render("courses",{page,dataHeader,dataCourses})
})


server.use(function(req,res){
    res.status(404).render("not-found",{dataHeader})
})


server.listen(5500,function(){
})