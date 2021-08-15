const btn = document.querySelectorAll('.btn');
const accordionBody = document.querySelectorAll('.accordion-body');
const sign = document.querySelectorAll('.sign');
let t = 0;
btn.forEach( (bt) =>{
    bt.onclick = ()=>{
        accordionBody[bt.getAttribute('data-num')].classList.toggle('active');
        let signText = sign[bt.getAttribute('data-num')].innerText; 
        if(signText == '-'){
            sign[bt.getAttribute('data-num')].innerText = '+';
        }
        else{
            sign[bt.getAttribute('data-num')].innerText = '-';
        }
    }
})