function login(){
    location.assign('../login/index.html');
}
function cadastrar(){
    location.assign('../cadastro/cadastrar.html');
}
window.onload =  function(){
    console.log('onload');
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