const box = document.querySelector(".container");
    const imagens = document.querySelectorAll(".container img");
    
    let contador = 0;
    
    function slider() {
        contador++;
    
        if(contador > imagens.length -1){
            contador = 0;
        }
    
        box.style.transform=`translateX(${-contador *1270}px)`;
    }
    
    setInterval(slider, 4000);