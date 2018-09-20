//Carrega o modulo do knex.
var knex = require('knex');

//Cria conexão com o Banco de Dados MySql.
var connectKnex = function(){
    return knex({
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'root',
            password : 'root',
            database : 'carrental'
        }
    });
}

//Retorna a conexão.
module.exports = function(){
	return connectKnex;
};