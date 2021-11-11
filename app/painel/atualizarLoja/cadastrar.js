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
            tokenAdmin:localStorage.getItem('tokenAdmin'),
            nome:nome,
            descrision:descrision,
            telefone:telefone,
            itens:itens,
            username:username,
            password:password
        }
        console.log(usuario);
    Cadastro(usuario);
    
})
const urlLoja = "https://api-server-delivery.herokuapp.com/cadastrar/loja";


function respostaC(res,use){
    console.log(res);
    const db = JSON.parse(res);
    if(db.status==true){
        alert(use + ' cadastrado, faça login');
        location.reload();
     //   location.replace('../login/index.html');
    }else{
        alert('ocorreu um erro inesperado');
    }
}
function Cadastro(body){
    const api = new XMLHttpRequest();
    api.open('POST',urlLoja,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    api.onload = function (){
        respostaC(this.responseText,body.nome);
    }
}


