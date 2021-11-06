window.onload = ()=>{

    RenderCard(pessoa);
}
function RenderCard(dados){
     document.getElementById('tela').innerHTML+=`
     <div class="card">
         <h3>${dados.titulo}</h3>
     <img src="/src/img/user-avatar.png" alt="imagem">
         <p>${dados.descrision}</p>
    </div> `;
}

   const pessoa ={
    titulo:'Neide Lanches',
    descrision:'o melhor lanche'
}

