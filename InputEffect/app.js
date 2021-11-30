const inpwrap = document.querySelector('.inpwrap');
const input = document.querySelector('.inp-anim');
const validation = document.querySelector('.inpwrap span');

input.addEventListener('input',(e)=>{
    if(e.target.value !== ""){
        e.target.parentNode.classList.add('active-input');
    }else if(e.target.value === ""){
        e.target.parentNode.classList.remove('active-input');
    }
    if(e.target.value.includes('0') || e.target.value.includes('1') || e.target.value.includes('2') || e.target.value.includes('3') || e.target.value.includes('4') || e.target.value.includes('5') ||e.target.value.includes('6') || e.target.value.includes('7') || e.target.value.includes('8') || e.target.value.includes('9') ){
        input.classList.add('erreur');
        validation.classList.add('visible');
        document.querySelector('.inpwrap label').classList.add('red');
    }else{
        input.classList.remove('erreur');
        validation.classList.remove('visible');
        document.querySelector('.inpwrap label').classList.remove('red');
    }
});

