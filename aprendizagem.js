const processarRelatorioVIP = async()=>{
    try{
        console.log('Lendo dados da API...');
        const resposta = await fetch('https://api.fintech.com/v1/transacoes');
        const dados = await resposta.json();
        const clientesPremConc = dados.filter(transacao=>transacao.status==='concluida' && transacao.cliente.plano==='premium');
        const listaFinal = clientesPremConc.map(transacao=>{

            const{nome} = transacao.cliente;

            return {
                ...transacao,
                nome: nome,
                alerta: true
                };
            }
        )

        return listaFinal;

    }catch(erro){
        console.log('Erro ao buscar dados da API',erro);
    }
}
