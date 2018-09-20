module.exports = function(app){
    let api = {};

    //-----Callbacks de Email-----//
    //Salva um novo Email de um Cliente.
    api.salvarEmail = (req, res) => {
        const knex = app.connection.conexaoKnex();
        const { id_cliente, email } = req.body;
        
        const contatoEmail = { id_cliente, email };
        knex('email').insert(contatoEmail)
            .then(resultado => {
                knex.destroy();
                res.status(200).end();
            })
            .catch(erro => {
                console.log(erro);
                knex.destroy();
                res.status(500).end();
            });
    };

    //Apaga um Email de um Cliente
    api.apagarEmail = (req, res) => {
        const { id_cliente, email } = req.params;

        if(id_cliente && email){
            const knex = app.connection.conexaoKnex();

            knex('email').where('id_cliente', id_cliente).andWhere('email', email).delete()
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

    //-----Callbacks de Telefone-----//
    //Salva um novo Telefone de um Cliente.
    api.salvarTelefone = (req, res) => {
        const knex = app.connection.conexaoKnex();
        const { id_cliente, telefone } = req.body;
        
        const contatoTelefone = { id_cliente, telefone };
        knex('telefone').insert(contatoTelefone)
            .then(resultado => {
                knex.destroy();
                res.status(200).end();
            })
            .catch(erro => {
                console.log(erro);
                knex.destroy();
                res.status(500).end();
            });
    };

    //Apaga um Telefone de um Cliente
    api.apagarTelefone = (req, res) => {
        const { id_cliente, telefone } = req.params;

        if(id_cliente && telefone){
            const knex = app.connection.conexaoKnex();

            knex('telefone').where('id_cliente', id_cliente).andWhere('telefone', telefone).delete()
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