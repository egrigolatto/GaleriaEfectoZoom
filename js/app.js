let imagen = document.querySelectorAll('.image')

for(let i=0;i<=8;i++){
    imagen[i].addEventListener('click', ()=>{
        if(imagen[i].classList.contains('foco') == false){
            imagen[i].classList.add('foco')
        }else{
            imagen[i].classList.remove('foco')
        }
    })
}