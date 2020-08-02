const fs = require('fs') // fs = file sistem, usado para trabalhar com arquivos do sistema
const data = require('./data.json')

exports.show = function(req,res){
    //req.query.id  "query strings"
    //req.body "envio do corpo do formulário"
    //req.params.id = /:id

    const { id } = req.params
     const foundInstructor = data.instructors.find(function(instructor){
         return instructor.id == id 
     })

     if(!foundInstructor) return res.send("instructor not found")
}
//create
exports.post = function(req,res){
    //Object é um método construtor de objetos
    const keys = Object.keys(req.body) //pega as chaves  do corpo http passadas. ex: ["avatar_url","name","birth","gender","services"]
    for (const key of keys) {
        //req.body.avatar_URL
        if(req.body[key]==""){
            return res.send("Por favor preencha todos os campos")
        }
    }

    let {avatar_url,name,birth,gender,services} = req.body

    birth = Date.parse(birth) // converte a string de data ex: 01/12/2010 em milisegundos do timeStamp
    const created_at = Date.now() // cria a propriedade 'created_at' no objeto body e adiciona a data atual em formato timeStamp
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })
    //O método JSON transforma um objeto javascript em um objeto JSON(javascript object notation)
    //.stringify serve para formatar o arquivo JSON
    fs.writeFile("data.json", JSON.stringify(data,null,2),function(err){
        if(err){
            return res.send("Write file error!")
        }
        else{
            return res.redirect("/instructors")
        }
    })
    // return res.send(req.body);
}

//update

//delete