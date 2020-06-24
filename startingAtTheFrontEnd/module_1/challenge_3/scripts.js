const modalOverlay = document.querySelector('.modal-overlay');
const cursos = document.querySelectorAll('.curso');
const modalMaximize = document.querySelector('.modal');

for(let curso of cursos){
    curso.addEventListener("click",function(){
        modalOverlay.classList.add('active');
        const pageId = curso.getAttribute('id')
        modalOverlay.querySelector('iframe').src=`http://rocketseat.com.br/${pageId}`

    })
}

document.querySelector('.close-modal').addEventListener("click",function(){
    modalOverlay.classList.remove('active')
    modalMaximize.classList.remove('maximize')
    modalOverlay.querySelector('iframe').src=``
})


document.querySelector('.maximize-modal').addEventListener("click",function(){
    if(modalMaximize.classList.contains('maximize')){
        modalMaximize.classList.remove('maximize')
    }else{
        modalMaximize.classList.add('maximize')
    }
})
