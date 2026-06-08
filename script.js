const botao = document.getElementById("botao-acao");
const resposta = document.getElementById("resposta");

botao.addEventListener("click", function(){

    if(resposta.style.display === "block"){

        resposta.style.display = "none";

    }else{

    resposta.style.display = "block";
    }

});


const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function(){

 document.body.classList.toggle("tema-escuro");

});

