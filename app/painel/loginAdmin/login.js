const forme =document.getElementById('formulario-login');
forme.addEventListener('submit',(e)=>{
e.preventDefault();

const username = document.getElementById('user').value;
const password = document.getElementById('pass').value;


if(username.length <=0 || password.length <=0){
    console.log('vazio');
}else{
    const body = {
        user:username,
        pass:password
    }

    const url='https://api-server-delivery.herokuapp.com/login/admin';
    
console.log('logando...');
  const tf =  postLoginAdmin(url,body);
}


})
function respostaLoginAdmin(resposta){
    console.log('resposta: '+ resposta);
    const dados = JSON.parse(resposta);
    const status = dados.status;
    if(status==true){
        localStorage.setItem('tokenAdmin',dados.tokenAdmin);
        location.replace('../admin/index.html');
    }else{
        alert('usuario e senha incorretos');
    }
}