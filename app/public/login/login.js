const forme = document.getElementById('formulario-login');
const adminUser = 'adminadmin'
const adminPass = 'adminadmin'
const UrlServer_DB = 'http://api-server-delivery.herokuapp.com/';
const laod = document.getElementById('load');

forme.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('tel').value;
    const password = document.getElementById('pas').value;

    if (username.length <= 0 || password.length <= 0) {
        console.log('vazio');
    } else if (username == adminUser && password == adminPass) {
        location.replace('app/public/painel/loginAdmin/login.html');

    } else {
        login(username, password);
      //  laod.style.visibility='visible'
    }

});
//fazer o login

 function login(tel, pass) {
    
    const body = {
        telefone: tel,
        password: pass
    };

    const retorno = postLogin(UrlServer_DB + "loginUser", body);
  
 }
 function verificar(retorno){
  ///  laod.style.visibility='visibility=hidden'
    console.log("retorno: "+retorno);
    const dados = JSON.parse(retorno);
    let status = dados.status;
    if (dados.status == true) {
        //guardar o token e fazer o login 
        alert("logado com sucesso! seu token: "+dados.token);
        localStorage.setItem('token',dados.token);
    } else {
       
        alert('telefone ou senha incorretos')
        console.log(dados.status);
        
    }
 }
 function renderLogin(){
document.getElementById('login-tela').innerHTML=` <h1>Login</h1>
<form id="formulario-login">
    <div class="div-input">
        <input type="text" id="tel"  required>
        <label>Telefone</label>
    </div>
    <div class="div-input">
        <input type="text" id="pas"  required>
        <label>Senha</label>
    </div>
    <button>Login</button>
    <p>Não é cadastrado? <a href="#">Cadastrar</a> <br> Esqueceu a senha? <a href="#">Recuperar</a></p>
</form>`
 }
 function renderload(){
     document.getElementById('login-tela').innerHTML=` <h1>Login</h1>
     <form id="formulario-login">
         <div class="div-input">
             <input type="text" id="tel"  required>
             <label>Telefone</label>
         </div>
         <div class="div-input">
             <input type="text" id="pas"  required>
             <label>Senha</label>
         </div>
         <img id='imagem' src="../../src/img/loading.gif" alt="">
         <p>Não é cadastrado? <a href="#">Cadastrar</a> <br> Esqueceu a senha? <a href="#">Recuperar</a></p>
     </form>`
 }
