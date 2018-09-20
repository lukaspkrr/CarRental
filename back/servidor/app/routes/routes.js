module.exports = function(app){

    let clientes = app.controllers.clientes;
    let veiculos = app.controllers.veiculos;
    let contatos = app.controllers.contatos;
    let aluguel = app.controllers.aluguel;

    //Rotas de Clientes
    app.route('/locadora/cliente')
        .get(clientes.listarClientes)
        .post(clientes.salvarCliente);

    app.route('/locadora/cliente/:id_cliente')
        .get(clientes.listarClienteId)
        .put(clientes.editarCliente)
        .delete(clientes.apagarCliente);

    //Rotas de Veiculos
    app.route('/locadora/veiculo')
        .get(veiculos.listarVeiculos);

    app.route('/locadora/veiculo/:renavam')
        .get(veiculos.listarVeiculoId);
    
    //Rotas de Contatos
    app.route('/locadora/email')
        .post(contatos.salvarEmail);

    app.route('/locadora/email/:id_cliente/:email')
        .delete(contatos.apagarEmail);

    app.route('/locadora/telefone')
        .post(contatos.salvarTelefone);

    app.route('/locadora/telefone/:id_cliente/:telefone')
        .delete(contatos.apagarTelefone);

    //Rotas de Aluguel
    app.route('/locadora/tipoPagamento')
        .get(aluguel.listarTipoPag);

    app.route('/locadora/aluguel')
        .get(aluguel.listarAluguel)
        .post(aluguel.salvarAluguel);

    app.route('/locadora/devolucao')
        .post(aluguel.devolverVeiculo);
}
