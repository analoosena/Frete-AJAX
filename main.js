$(document).ready(function(){
    $('#cep').mask('00000-000'); //Aplicando a máscara com o plugin do jquery

    $('#btn-buscar-cep').click(function(){ //criando a busca pelo CEP em conexão com o api
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $(this);

        $(botao).find('i').addClass('d-none');   //Adicionando o botão de carregamento depois da busca
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta){  //Adicionando o conteudo encontrado à barra de Endereço
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade} - ${estado}`;

            $('#endereco').val(endereco);

            setTimeout(function(){     //Removendo o botão de carregamento depois da busca
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            },500)
            
        })
    })
})