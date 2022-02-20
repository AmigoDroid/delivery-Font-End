function login(){
    location.assign('../login/index.html');
}
function cadastrar(){
    location.assign('../cadastro/cadastrar.html');
}

function RenderCard(dados){
    console.log('Render Card');
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


function render(){
    const url='https://api-server-delivery.herokuapp.com/splash/delivery';
    const lista = get(url,'');
    const dados = JSON.parse(lista);
    console.log(dados);
    if(dados.status===true){
        console.log(dados.body.length -1);
       
        for(let i =0; i < dados.body.length;i++){
            let body =dados.body;
            console.log(body[0]);
            RenderCard(body[i]);
        }
    }else{
        console.log('vazio');
    }
    
}
function msg(texto){
    document.getElementById('textMSG').innerText=texto;
}
function mensagem(){
    const data = new Date;
    const hora = data.getHours();
   console.log(hora);
    if(hora>=5 && hora <12){
        //bom dia
        msg('Olá, Bom Dia!');
    }else if(hora>=12 && hora <18){
        //boa tarde
        msg('Olá, Boa Tarde!')
    }else if(hora>=18 && hora <24){
        //boa noite
        msg('Olá, Boa Noite!')
    }else{
        //boa madrugada
        msg('Boa Madrogada!')
    }
}


window.onload =  function(){
    console.log('onload');
    render();
    mensagem();
    const url="https://api-server-delivery.herokuapp.com/home/cliente/";
    const token=localStorage.getItem('token');
    const logar = get(url+token);
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