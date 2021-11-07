const forme = document.getElementById('formulario-login');
const adminUser = 'adminadmin'
const adminPass = 'adminadmin'
const UrlServer_DB = 'https://api-server-delivery.herokuapp.com/';
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
        localStorage.setItem('token',dados.token);
        location.replace('../home/index.html');
    } else {
        alert('telefone ou senha incorretos')
        console.log(dados.status);
        
    }
 }
