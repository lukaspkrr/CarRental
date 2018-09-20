module.exports = function(app){
    let api = {};

    //Lista todos os Clientes.
    api.listarAluguel = (req, res) => {
        const connection = app.connection.conexao();
        const aluguelDAO = new app.infra.AluguelDAO(connection);

        aluguelDAO.listarAluguel((erro, resultado) => {
            erro ? (console.log(erro), res.status(500).end()) : res.status(200).json(resultado);
        });

        connection.end();
    }

    //Lista todos os Tipos de Pagamento.
    api.listarTipoPag = (req, res) => {
        const knex = app.connection.conexaoKnex();

        knex.select('*').from('tipo_pag')
            .then(resultado => {
                knex.destroy();
                res.status(200).json(resultado);
            })
            .catch(erro => {
                console.log(erro);
                knex.destroy();
                res.status(500).end();
            });
    }

    //Cadastra um Pagamento -> Aluguel e atualiza a disponibilidade do Veiculo.
    api.salvarAluguel = (req, res) => {
        const knex = app.connection.conexaoKnex();
        const { id_cliente, renavam, valor, id_tipo_pag } = req.body;
        
        const pagamento = { valor, id_tipo_pag };
        knex('pagamento').insert(pagamento)
            .then(resultadoPag => {

                const aluguel = { id_cliente, renavam, nota_fiscal: resultadoPag[0]};
                return knex('aluguel').insert(aluguel)
                    .then(resultadoAluguel => {

                        return knex('veiculo').where('renavam', renavam).update({ disponivel: 0 })
                            .then(resultado => {
                                knex.destroy();
                                res.status(200).end();
                            })
                });
            })
            .catch(erro => {
                console.log(erro);
                knex.destroy();
                res.status(500).end();
            });
    };

    //Faz a devolução de um Veiculo colocando o check_out e tornando o Veiculo disponível.
    api.devolverVeiculo = (req, res) => {
        const knex = app.connection.conexaoKnex();
        const { id_cliente, renavam } = req.body;

        const date = new Date();
        const check_out = `${date.toISOString().slice(0,4)}-${date.toISOString().slice(5,7)}-${date.toISOString().slice(8,10)} ${date.toISOString().slice(11,13)-3}:${date.toISOString().slice(14,16)}:${date.toISOString().slice(17,19)}`;
        
        knex('aluguel').where('id_cliente', id_cliente).andWhere('renavam', renavam).update({ check_out })
            .then(resultadoAluguel => {
                return knex('veiculo').where('renavam', renavam).update({ disponivel: 1 })
                    .then(resultado => {
                        knex.destroy();
                        res.status(200).end();
                    })
            })
            .catch(erro => {
                console.log(erro);
                knex.destroy();
                res.status(500).end();
            });
    };

    return api;
}