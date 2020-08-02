const fs = require('fs')
const data = require('./data.json')


exports.post = function(req,res){
    const keys = Object.keys(req.body)
    for (const key of keys) {
        if(req.body[key] == ""){
            return res.send("Por favor preencha todos os campos")
        }
    }

    let {avatar_url,name,birth,instruction_degree,type_of_class,subjects} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        name,
        avatar_url,
        instruction_degree,
        type_of_class,
        subjects,
        created_at
    })

    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if(err){
            return res.send("Write file error!")
        }
        else{
            res.redirect('/teachers')
        }
    })
}