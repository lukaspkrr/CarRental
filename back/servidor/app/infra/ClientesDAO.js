class ClienteDAO {
    constructor(connection) {
        this._connection = connection;
    }
    
    //Lista todos os Veiculos.
    listarClientes(callback) {
        this._connection.query('SELECT id_cliente, nome, cpf, cnpj, tipo_cliente FROM cliente', callback);
    }

    //Lista todos os Veiculos.
    listarClienteId(id_cliente, callback) {
        this._connection.query(`SELECT cliente.*, GROUP_CONCAT(DISTINCT email.email) AS 'emails', GROUP_CONCAT(DISTINCT telefone.telefone) AS 'telefones' FROM cliente	LEFT JOIN email	ON cliente.id_cliente = email.id_cliente LEFT JOIN telefone ON cliente.id_cliente = telefone.id_cliente WHERE cliente.id_cliente = ${id_cliente}`, callback);
    }
}

module.exports = () => {
	return ClienteDAO;
};