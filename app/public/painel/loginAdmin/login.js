const forme =document.getElementById('formulario-login');
forme.addEventListener('submit',(e)=>{
e.preventDefault();

const username = document.getElementById('user').value;
const password = document.getElementById('pass').value;


if(username.length <=0 || password.length <=0){
    console.log('vazio');
}else{
    console.log('fazer login');
}



})