const urll ="https://api-server-delivery.herokuapp.com/home/cliente/";
const token = ""+ localStorage.getItem('token');

window.onload = ()=>{
    altenticar();
  
}



function RenderCard(dados){
    let {nome,descrision,id} = dados;
     document.getElementById('tela').innerHTML+=`
     <div class="card">
      
     <img src="../../src/img/user-avatar.png" alt="imagem">
     <h3>${nome}</h3>
         <p>${dados.descrision} <br><br>
         Telefone: ${dados.telefone}</p>   
         <button onclick='abrir()'>Fazer Pedido!</button>
    </div> `;
} 


function abrir(lojaname){
    
     localStorage.setItem('nomeLoja','Neide Lanches');
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
            console.log(bodydb[i]);
        }
    }else{
        alert('você precisa fazer login');
        location.replace('../login/index.html');
    }
}