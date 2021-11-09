function get(url){
    const api = new XMLHttpRequest();
    api.open("get",url,false);
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
