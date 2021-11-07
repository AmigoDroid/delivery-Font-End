function get(url){
    const api = new XMLHttpRequest();
    api.open("get",url,false);
    api.setRequestHeader('Content-type','application/json');
    api.send();
    return api.responseText;
}
function post(url,body){
    const api = new XMLHttpRequest();
    api.open('post',url,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(body);
    return api.responseText;
}