class AluguelDAO {
    constructor(connection) {
        this._connection = connection;
    }
    
    //Lista todos os Veiculos que ainda não foram entregues.
    listarAluguel(callback) {
        this._connection.query('SELECT cliente.nome, aluguel.id_cliente, aluguel.renavam, aluguel.check_in FROM aluguel INNER JOIN cliente ON aluguel.id_cliente = cliente.id_cliente WHERE aluguel.check_out is null', callback);
    }
}

module.exports = () => {
	return AluguelDAO;
};