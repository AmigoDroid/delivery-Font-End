function login(){
    location.assign('../login/index.html');
}
function cadastrar(){
    location.assign('../cadastro/cadastrar.html');
}

function RenderCard(dados){
    let {nome,descrision,telefone}=dados;
    document.getElementById('conteudo').innerHTML+=`
    <div class="card">
    <div class="img">
        <img src="../../src/img/lago-verde-img.png" alt="card-img">
    </div>
    <div class="titleCard">
        <h1>${nome}</h1>
    </div>
    <div class="descrision">
        <p>${descrision} <br> Telefone:${telefone}</p>
    </div>
    <div class="button" onclick='whatsapp(${telefone})'>
        <img src="../../src/img/whatsapp.png" alt="icon-whatsaap">
        <p>contato</p>
    </div>
</div>
    `;
}
function whatsapp(tel){
    alert('telefone: '+tel);
}






window.onload =  function(){
    console.log('onload');
    const url="https://api-server-delivery.herokuapp.com/home/cliente/";
    const token=localStorage.getItem('token');
  //  const logar = get(url+token);
    const dados = JSON.parse(logar);
    if(dados.status){ 
        console.log(dados.status);
            const res =  confirm('deseja fazer login?');
            if(res){
                //logar
                location.assign('../home/index.html');
            }else{
                //não
            }
    }
}