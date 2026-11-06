//    [
//        { id: 't1', cliente: { nome: 'Ana', plano: 'premium' }, valor: 450.00, status: 'concluida' },
//    { id: 't2', cliente: { nome: 'Carlos', plano: 'free' }, valor: 50.00, status: 'pendente' },
//    { id: 't3', cliente: { nome: 'Bia', plano: 'premium' }, valor: 1200.00, status: 'concluida' }
//    ]
//                     fetch do link
//                  apenas status concluido e q o cliente seja premium


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
