const forme = document.getElementById('formulario-cadastro');
forme.addEventListener('submit',function(e){

e.preventDefault();
console.log('submit');


    const nome = document.getElementById('nome').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

        const usuario = {
            nome:nome,
            rua:rua,
            numero:numero,
            referencia:complemento,
            telefone:telefone,
            password:senha
        }
        console.log(usuario);
    Cadastro(url,usuario);
    
})
const url = "https://api-server-delivery.herokuapp.com/cadastrar/Usuario";


function respostaC(res){
    console.log(res);
    const db = JSON.parse(res);
    console.log(db);
    if(db.status==true){
        alert('usuario cadastrado, faça login');
        location.replace('../login/index.html');
    }else{
        alert('ocorreu um erro inesperado');
    }
}
function Cadastro(url,body){
    const api = new XMLHttpRequest();
    api.open('POST',url,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    api.onload = function (){
        respostaC(this.responseText);
    }
}


