const forme = document.getElementById('formulario-cadastro');
forme.addEventListener('submit', (e) => {
e.preventDefault();

    const url = "https://api-server-delivery.herokuapp.com/";

    const nome = document.getElementById('nome').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    if(nome.length>0 && rua.length>0 && numero.legth>0 && complemento.legth>0 && telefone.legth>0 && senha.legth>0){
        //
        const usuario = {
            nome:nome,
            rua:rua,
            numero:numero,
            complemento:complemento,
            telefone:telefone,
            senha:senha
        }
        postCadastro(url+'cadastrarUser',usuario)
    }
})

 


