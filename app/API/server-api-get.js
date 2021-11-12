const url='https://api-server-delivery.herokuapp.com/lista/';
const urlDEL='https://api-server-delivery.herokuapp.com/apagar/';
const urlAT='https://api-server-delivery.herokuapp.com/editar/';


function get(url){
    const api = new XMLHttpRequest();
    api.open("GET",url,false);
    api.setRequestHeader('Content-type','application/json');
    api.send();
    return api.responseText; 
}
function postLogin(url,body){
    const api = new XMLHttpRequest();
    api.open('POST',url,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    api.onload=function (){
        verificar(this.responseText);
    } 
}
function postLoginAdmin(url,body){
    const api = new XMLHttpRequest();
    api.open('POST',url,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    api.onload = function(){
        respostaLoginAdmin(this.responseText);
    }
}
function postListaStores(local,l){
    const body = {
        tokenAdmin:localStorage.getItem('tokenAdmin')
    }
    const api = new XMLHttpRequest();
    api.open("POST",url+local,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    api.onload = function(){
        document.getElementById('tela').innerHTML='';

        if(l==1){
             renderizarLojas(this.responseText);

        }else if(l==2){
            renderizarPessoas(this.responseText);
        }
       
    }
}
function del(local,id){
    const body ={id:id, tokenAdmin:localStorage.getItem('tokenAdmin')}
    const api = new XMLHttpRequest();
    api.open("POST",urlDEL+local,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    api.onload = function(){
        RESdelete(this.responseText,local);
}}
function editar(local,id){
    const body ={id:id, tokenAdmin:localStorage.getItem('tokenAdmin')}
    const api = new XMLHttpRequest();
    api.open("POST",urlAT+local,true);lo
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    api.onload = function(){
        RESdelete(this.responseText,local);
}
}
