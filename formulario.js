function verificarForm(){
    //pegando elementos
    var opcao_verificar = document.getElementById('melhor').value.toLowerCase().trim();
    var opcao = document.getElementById('melhor');
    var validacao = document.getElementById('validacao');

    //validando elementos
    switch (opcao_verificar) {
        case 'xbox360':
        case 'xboxone':
        case 'ps3':
        case 'nintendo switch':
        case 'nintendo wii-u':
        case 'computador':
        case 'ps2':
        case 'ps4':
        case 'Xbox X-series':
        case 'ps5':
        case 'nintendo-64':
            opcao.classList.remove("is-invalid");
            opcao.classList.add("is-valid");
            validacao.className = 'valid-feedback';
            validacao.innerHTML = 'Opção válida';
            break;
        case '':
            break;
        default:
            opcao.classList.remove("is-valid");
            opcao.classList.add("is-invalid");
            validacao.className = 'invalid-feedback';
            validacao.innerHTML = 'Opção inválida';
            break;
    }

}