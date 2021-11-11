
 //RENDERIZAR AS LOJAS
function RenderLojas(dados){
    document.getElementById('tela').innerHTML+=
    `
    <div class="card"style="background: url('../../src/img/bg_auth.jpg');
    text-align: center;
    border: 1px solid;
    margin: 20px;
    border-radius: 10px;
    padding: 10px;">
                <h3>${dados.nome} <br> ID: ${dados.id}</h3>
            <img src="../../src/img/user-avatar.png" alt="imagem">
                <p>${dados.descrision}</p>
                <button onclick='apagarLoja(${dados.id})'>Apagar</button>
                <button onclick='EditarLoja(${dados.id})'>Editar</button>
           </div> 
    `
}
// RENDERIZAR AS PESSOAS
function RenderPessoas(dados){
    const info = dados;
   const tela = document.getElementById('tela').innerHTML+=`
     <div class="card" style="background: url('../../src/img/bg_auth.jpg');
     text-align: center;
     border: 1px solid;
     margin: 20px;
     border-radius: 10px;
     padding: 10px;">
    <h3>ID: ${dados.id} <br><strong>Nome:</strong> ${dados.nome} </h3>
<img src="../../src/img/user-avatar.png" alt="imagem">
    <p>
  <strong>Rua:</strong> ${dados.rua} <br>
  <strong>Numero:</strong> ${dados.numero} <br>
  <strong>Referencia:</strong> ${dados.referencia} <br>
  <strong>Telefone:</strong>  ${dados.telefone} <br>
  <strong>Senha:</strong> ${dados.password}</p>

    <button onclick='apagarUser(${dados.id})'>Apagar</button>
    <button onclick='atualizarCadastro(${dados.id})'>Atualizar</button>
</div> `

}


//BOTÃO DE LOJAS
function lojas(){
const df = postListaStores('stores',1)
}
//BOTÃO DE PESSOAS
function pessoas(){
    let dg = postListaStores('users',2)
}


// PEGAR CADA ITEM E MANDAR RENDERIZAR AS LOJAS 
function renderizarLojas(resposta){
    const dados = JSON.parse(resposta);
    let i =0;
    if(dados.status===true){
    let j = dados.body.length;
    for(i;i<j;i++){
        RenderLojas(dados.body[i]);
    }
  console.log(dados);

}else{
   notautorized();
}

}

// PEGAR CADA ITEM E MANDAR RENDERIZAR AS PESSOAS
function renderizarPessoas(resposta){
    const dados = JSON.parse(resposta);
    let i =0;
    if(dados.status==true){
    let j = dados.body.length;
    for(i;i<j;i++){
        RenderPessoas(dados.body[i]);
    }
  console.log(dados);

}else{
    notautorized();
}}

function apagarLoja(id){
    del('loja',id)
}
function apagarUser(id){
    del('pessoa',id)
}
function atualizarCadastro(body){
alert(body);
}
window.onload=()=>{
    lojas();
}
//NÃO AUTENTICADO/AUTORIZADO
function notautorized(){
    alert('seu login expirou, faça login novamente!')
    location.replace('../loginAdmin/login.html');
}
function RESdelete(res,local){
const dados = JSON.parse(res);
console.log(dados);
const {status} = dados;
if(status==true){
    //apagado
    if(local=='loja'){
        lojas();
    }else{
        pessoas();
    }
}
}
function cadastrarLoja(){
    location.assign('../cadastro/cadastrar.html');
}
function EditarLoja(id){
    
}