

function RenderLojas(dados){
    document.getElementById('tela').innerHTML+=
    `
    <div class="card">
                <h3>${dados.nome} <br> ID: ${dados.id}</h3>
            <img src="/src/img/user-avatar.png" alt="imagem">
                <p>${dados.descrision}</p>
                <button onclick='apagar(${dados.id})'>Apagar</button>
           </div> 
    `
}
function RenderPessoas(dados){
    document.getElementById('tela').innerHTML+=`
     <div class="card">
    <h3>ID: ${dados.id} <br><strong>Nome:</strong> ${dados.nome} </h3>
<img src="../../src/img/user-avatar.png" alt="imagem">
    <p>
  <strong>Rua:</strong> ${dados.rua} <br>
  <strong>Numero:</strong> ${dados.numero} <br>
  <strong>Referencia:</strong> ${dados.referencia} <br>
  <strong>Telefone:</strong>  ${dados.telefone} <br>
  <strong>Senha:</strong> ${dados.password}</p>

    <button onclick='apagar(${dados.id})'>Apagar</button>
    <button onclick='atualizarCadastro(${dados})'>Atualizar</button>
</div> `
}
function pessoa(){
const cliente = {
    id:0,
    nome:'Luciano',
    rua:'senador sarney',
    numero:'405',
    referencia:'ao lado da esmeralda',
    telefone:'99984645196',
    password:'54'
}
return cliente;
}

function render(){
    let  i =0;
    let vezes = 5;
    for(i;i<vezes;i++){
        RenderPessoas(pessoa());
    }
}
function apagar(id){
    alert(id)

}
function atualizarCadastro(body){
alert('poi');
}
window.onload=()=>{
    render();
}