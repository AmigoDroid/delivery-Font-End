

function RenderCard(dados){
    document.getElementById('tela').innerHTML+=
    `
    <div class="card">
                <h3>${dados.titulo} <br> ID: ${dados.id}</h3>
            <img src="/src/img/user-avatar.png" alt="imagem">
                <p>${dados.descrision}</p>
                <button onclick='apagar(${dados.id})'>Apagar</button>
           </div> 
    `
}
window.onload=()=>{
    let vr =20;
    for(let i =0; i< vr;i++){
         RenderCard(perfil());

    }
}
   


function perfil(){
    let sf ={
        id:Math.floor(Math.random(1+1*7)*10000),
        titulo:'titulo',
        descrision:'descrição',
        endereco:'rua 13 de maio',
        type:'Espetinho'
    }
    console.log(sf.id);
    return sf;
}

function apagar(id){
    alert('apagar Id:'+id)
}