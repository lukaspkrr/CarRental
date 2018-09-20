module.exports = function(app){
    let api = {};

    //Lista todos os Clientes.
    api.listarClientes = (req, res) => {
        const connection = app.connection.conexao();
        const clientesDAO = new app.infra.ClientesDAO(connection);

        clientesDAO.listarClientes((erro, resultado) => {
            erro ? (console.log(erro), res.status(500).end()) : res.status(200).json(resultado);
        });

        connection.end();
    }

    //Lista os dados de um Clientes
    api.listarClienteId = (req, res) => {
        const { id_cliente } = req.params;

        if(id_cliente){
            const connection = app.connection.conexao();
            const clientesDAO = new app.infra.ClientesDAO(connection);
            let arrayEmail = [];
            let arrayTelefone = [];

            clientesDAO.listarClienteId(id_cliente, (erro, resultado) => {
                if(erro){
                    console.log(erro);
                    res.status(500).end();
                }else{
                    if(resultado[0].emails){
                        arrayEmail = resultado[0].emails.split(",");
                    }

                    if(resultado[0].telefones){
                        arrayTelefone = resultado[0].telefones.split(",");
                    }

                    const resposta = {
                        id_cliente: resultado[0].id_cliente,
                        nome: resultado[0].nome,
                        cnh: resultado[0].cnh,
                        cpf: resultado[0].cpf,
                        cnpj: resultado[0].cnpj,
                        data_cadastro: resultado[0].data_cadastro,
                        tipo_cliente: resultado[0].tipo_cliente,
                        email: arrayEmail,
                        telefone: arrayTelefone
                    }

                    res.status(200).json([resposta])
                }
            });

            connection.end();
        } else { res.status(400).end(); }
    }

    //Salva um novo Cliente
    api.salvarCliente = (req, res) => {
        const knex = app.connection.conexaoKnex();
        
        const { cnh, cnpj, cpf, nome, tipo_cliente} = req.body;
        const email = req.body.email;
        const telefone = req.body.telefone;
        
        const cliente = { cnh, cnpj, cpf, nome, tipo_cliente };
        knex('cliente').insert(cliente)
            .then(resultadoCliente => {
                
                for(let i=0; i<email.length; i++){
                    email[i].id_cliente = resultadoCliente[0];
                }
                return knex('email').insert(email)
                    .then(resultadoEmail => {

                        for(let i=0; i<telefone.length; i++){
                            telefone[i].id_cliente = resultadoCliente[0];
                        }
                        return knex('telefone').insert(telefone)
                            .then(resultadoTelefone => {
                                knex.destroy();
                                res.status(200).end();
                        });
                });
            })
            .catch(erro => {
                console.log(erro);
                knex.destroy();
                res.status(500).end();
            });
    };

    //Edita um Cliente
    api.editarCliente = (req, res) => {
        const { id_cliente } = req.params;

        if(id_cliente){
            const knex = app.connection.conexaoKnex();
            const cliente = req.body;
    
            knex('cliente').where('id_cliente', id_cliente).update(cliente)
                .then(resultado => {
                    knex.destroy();
                    res.status(200).end();
                })
                .catch(erro => {
                    console.log(erro);
                    knex.destroy();
                    res.status(500).end();
                });
        } else { res.status(400).end(); }
    }

    //Apaga um Cliente
    api.apagarCliente = (req, res) => {
        const { id_cliente } = req.params;

        if(id_cliente){
            const knex = app.connection.conexaoKnex();

            knex('cliente').where('id_cliente', id_cliente).delete()
                .then(resultado => {
                    knex.destroy();
                    res.status(200).end();
                })
                .catch(erro => {
                    console.log(erro);
                    knex.destroy();
                    res.status(500).end();
                });
        } else { res.status(400).end(); }
    }

    return api;
}