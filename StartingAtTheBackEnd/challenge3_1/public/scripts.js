const cursos = document.querySelectorAll('.curso');


for(let curso of cursos){
    curso.addEventListener("click",function(){
        const pageId = curso.getAttribute('id')
        window.location.href = `/courses/${pageId}`
    })
}


