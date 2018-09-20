class VeiculosDAO {
    constructor(connection) {
        this._connection = connection;
    }
    
    //Lista todos os Veiculos.
    listarVeiculos(callback) {
        this._connection.query('SELECT veiculo.renavam, veiculo.cor, veiculo.placa, veiculo.lugares, veiculo.chassi, veiculo.imagem, veiculo.disponivel, modelo.preco, modelo.modelo, modelo.ano, modelo.combustivel, modelo.transmissao, modelo.num_portas, modelo.tanque, marca.marca FROM veiculo INNER JOIN modelo ON veiculo.id_modelo = modelo.id_modelo INNER JOIN marca ON modelo.id_marca = marca.id_marca', callback);
    }

    //Lista todos os Veiculos.
    listarVeiculoId(renavam, callback) {
        this._connection.query(`SELECT veiculo.renavam, veiculo.cor, veiculo.placa, veiculo.lugares, veiculo.chassi, veiculo.imagem, veiculo.disponivel, modelo.preco, modelo.modelo, modelo.ano, modelo.combustivel, modelo.transmissao, modelo.num_portas, modelo.tanque, marca.marca FROM veiculo INNER JOIN modelo ON veiculo.id_modelo = modelo.id_modelo INNER JOIN marca ON modelo.id_marca = marca.id_marca WHERE veiculo.renavam = ${renavam}`, callback);
    }
}

module.exports = () => {
	return VeiculosDAO;
};