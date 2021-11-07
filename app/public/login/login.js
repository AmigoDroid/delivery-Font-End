const forme = document.getElementById('formulario-login');
const adminUser = 'adminadmin'
const adminPass = 'adminadmin'
const UrlServer_DB = 'http://api-server-delivery.herokuapp.com/';


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
