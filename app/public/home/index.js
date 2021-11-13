const urll ="https://api-server-delivery.herokuapp.com/home/cliente/";
const token = ""+ localStorage.getItem('token');

window.onload = ()=>{
    altenticar();
}


function RenderCard(dados){
     document.getElementById('tela').innerHTML+=`
     <div class="card" onclick='abrir(${dados.id})'>
         <h3>${dados.nome}</h3>
     <img src="../../src/img/user-avatar.png" alt="imagem">
         <p>${dados.descrision}</p>
    </div> `;
} 


function abrir(id){
    location.assign('https://pedidos-delivery.herokuapp.com/home/'+id);
}

function altenticar(){
    const resposta = get(urll+token);
    const dados = JSON.parse(resposta);
    if(dados.status==true){
        const bodydb = dados.body;
        for(let i =0;i<bodydb.length;i++){
            RenderCard(bodydb[i]);
        }
    }else{
        alert('você precisa fazer login');
        location.replace('../login/index.html');
    }
}