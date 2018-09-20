module.exports = function(app){
    let api = {};

    //Lista todos os Veiculos.
    api.listarVeiculos = (req, res) => {
        const connection = app.connection.conexao();
        const veiculosDAO = new app.infra.VeiculosDAO(connection);

        veiculosDAO.listarVeiculos((erro, resultado) => {
            erro ? (console.log(erro), res.status(500).end()) : res.status(200).json(resultado);
        });

        connection.end();
    }

    //Lista os dados de um Clientes
    api.listarVeiculoId = (req, res) => {
        const { renavam } = req.params;

        if(renavam){
            const connection = app.connection.conexao();
            const veiculosDAO = new app.infra.VeiculosDAO(connection);
    
            veiculosDAO.listarVeiculoId(renavam, (erro, resultado) => {
                erro ? (console.log(erro), res.status(500).end()) : res.status(200).json(resultado);
            });
    
            connection.end();
        } else { res.status(400).end(); }
    }

    return api;
}