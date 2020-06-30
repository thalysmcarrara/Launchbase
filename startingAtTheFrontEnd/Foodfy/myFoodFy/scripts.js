const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal')

console.log(cards);
for (let card of cards) {
    card.addEventListener("click",function(){
        modal.classList.add('active')
    })
}

modal.querySelector('a').addEventListener("click",function(){
    modal.classList.remove('active')
})