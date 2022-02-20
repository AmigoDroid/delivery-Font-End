const urll ="https://api-server-delivery.herokuapp.com/home/cliente/";
const token = ""+ localStorage.getItem('token');

window.onload = ()=>{
    altenticar();
  
}



function RenderCard(dados){
     document.getElementById('tela').innerHTML+=`
     <div class="card">
         <h3>${dados.nome}</h3>
     <img src="../../src/img/user-avatar.png" alt="imagem">
         <p>${dados.descrision} <br><br>
         Telefone: ${dados.telefone}</p>   
         <button onclick='abrir(${dados.id})'>Fazer Pedido!</button>
    </div> `;
} 


function abrir(id){
     localStorage.setItem('idLoja',id);
     location.assign('../pedidos/index.html');

     //alert('essa função está em desenvolvimento');
}

function altenticar(){
    console.log('altenticando...');
    const resposta = get(urll+token);
    const dados = JSON.parse(resposta);
    if(dados.status==true){
        console.log('Renderizando...');
        const bodydb = dados.body;
        for(let i =0;i<bodydb.length;i++){
            RenderCard(bodydb[i]);
        }
    }else{
        alert('você precisa fazer login');
        location.replace('../login/index.html');
    }
}