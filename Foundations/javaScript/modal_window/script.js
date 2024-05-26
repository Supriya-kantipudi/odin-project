const btnclosemodal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModal = document.getElementsByClassName('show-modal');
const modal = document.querySelector('.modal');
console.log(showModal);

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i < showModal.length ; i++){
    showModal[i].addEventListener("click",openModal);
}

btnclosemodal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);

document.addEventListener("keydown",function(e){
    if(e.key == "Escape" && !modal.classList.contains('hidden')){
        closeModal();
    }
})