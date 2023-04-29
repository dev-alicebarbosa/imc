btn= document.getElementById("btn");
img= document.getElementById("img");
mensagem= document.getElementById("mensagem");

let calculo=0
let qual=0

btn.addEventListener('click', function(event){
    event.preventDefault()
    altura=document.getElementById("altura").value;
    peso =document.getElementById("peso").value;
    genero =document.getElementById("genero").value;
    
    calculo= peso/ ((altura/100)**2)
    calculo= calculo.toFixed(2);
    mensagem.innerHTML= `O seu IMC é igual à ${calculo}`
    if(genero==1){
        qual=6
        if(calculo<=18.5){
            img.src=`img/${qual}.png`
        } else if (calculo>18.6 && calculo <=24.9){
            qual=qual+1
            img.src=`img/${qual}.png`
        }else if (calculo>25 && calculo <=29.9){
            qual=qual+2
            img.src=`img/${qual}.png`
        }else if (calculo>30 && calculo <=34.9){
            qual=qual+3
            img.src=`img/${qual}.png`
        }else if (calculo>35 && calculo <=39,9){
            qual=qual+4
            img.src=`img/${qual}.png`
        }else{
            qual=qual+5
            img.src=`img/${qual}.png`
        }
    } else{
       qual=1
       if(calculo<=18.5){
            img.src=`img/${qual}.png`
        } else if (calculo>18.6 && calculo <=24.9){
            qual=qual+1
            img.src=`img/${qual}.png`
        }else if (calculo>25 && calculo <=29.9){
            qual=qual+2
            img.src=`img/${qual}.png`
        }else if (calculo>30 && calculo <40){
            qual=qual+3
            img.src=`img/${qual}.png`
        }else{
            qual=qual+4
            img.src=`img/${qual}.png`
        }
    }
})