const forme = document.getElementById('formulario-cadastro');

forme.addEventListener('submit',function(e){

e.preventDefault();
console.log('submit');


    const nome = document.getElementById('nome').value;
    const descrision = document.getElementById('rua').value;
    const telefone = document.getElementById('numero').value;
    const itens = document.getElementById('complemento').value;
    const username = document.getElementById('telefone').value;
    const password = document.getElementById('senha').value;

        const usuario = {
            nome:nome,
            descrision:descrision,
            telefone:telefone,
            itens:itens,
            username:username,
            password:password
        };
       // console.log(usuario);
    Editar(usuario);
    
})
const urlLoja = "https://api-server-delivery.herokuapp.com/editar/loja";


function respostaC(res){
    console.log(res);
   
}
function Editar(body){
    const api = new XMLHttpRequest();
    api.open('POST',urlLoja,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    api.onload = function (){
        respostaC(this.responseText);
    }
}
function dados(){

}
window.onload=function(){
    const nomet = document.getElementById('nome');
    const descrisiont = document.getElementById('rua');
    const telefonet = document.getElementById('numero');
    const itenst = document.getElementById('complemento');
    const usernamet = document.getElementById('telefone');
    const passwordt = document.getElementById('senha');
    const id = localStorage.getItem('id');
    const rota ='/dadosloja/'+id;
    const api_link='https://api-server-delivery.herokuapp.com'+rota;

    const body = get(api_link);
    const dados = JSON.parse(body);
    const {nome,descrision,telefone,itens,username,password} = dados;
    nomet.value=nome;
    descrisiont.value=descrision;
    telefonet.value=telefone;
    itenst.value=itens;
    usernamet.value=username;
    passwordt.value=password;

}


