# CarRental

Repositório com código de trabalho de faculdade

## Documentação

#### Dependências

- Node.js
- Nodemon (opcional)
- AngularCli 

### Como usar

### Front

Antes de rodar a aplicação entre no repositório (/front) e digite:

```
npm install
```

Isso irá instalar as dependências necessárias.
Para rodar a aplicação digite:

```
ng serve
```
Porta padrão 4200. Para trocar a porta inicie o servidor com:

```
ng serve --port numero-da-porta
```
 
 ### Back

 Antes de rodar a aplicação entre no repositório (/servidor) e digite:
 
 ```
npm install
```

Isso irá instalar as dependências necessárias.
Para rodar a aplicação digite:

```
node server
```

ou apenas:

```
nodemon
```
caso tenha o nodemon instalado.
Porta do servidor 3000.

### Endpoints

/locadora/cliente		Método: GET
Trás todos os clientes cadastrados no banco.

/locadora/cliente		Método: POST
Cadastra clientes no banco.

```json
{
	"nome": "nomeCliente",
	"cnh": "99999999999",
	"cpf": "99999999999",
	"cnpj": "99999999999999",
	"tipo_cliente": "Pessoa Jurídica/Física",
	"telefone": [{"telefone": "99999999999"},...,{"telefone": "99999999999"}],
	"email": [{"email":"email@email.com"},...,{"email":"email@email.com"}]
}
```

/locadora/cliente/:id_cliente		Método: GET
Trás todos os clientes cadastrados no banco por ID.

/locadora/cliente/:id_cliente		Método: PUT
Edita clientes no banco por ID.

```json
{
	"nome": "nomeCliente",
	"cnh": "99999999999",
	"cpf": "99999999999",
	"cnpj": "99999999999999",
	"tipo_cliente": "Pessoa Jurídica/Física"
}
```

/locadora/cliente/:id_cliente		Método: DELETE
Deleta clientes cadastrados no banco por ID.

/locadora/veiculo		Método: GET
Trás todos os veículos cadastrados no banco.

/locadora/veiculo/:renavam		Método: GET
Trás todos os veículos cadastrados no banco por ID.

/locadora/email		Método: POST
Adiciona email ao cliente.

```json
{
	"id_cliente": 9,
	"email": "email@email.com"}
}
```

/locadora/email/:id_cliente/:email		Método: DELETE
Deleta o email do cliente passando o ID e o email.

/locadora/telefone		Método: POST
Adiciona telefone ao cliente.

```json
{
	"id_cliente": 9,
	"telefone": "99999999999"}
}
```

/locadora/telefone/:id_cliente/:telefone		Método: DELETE
Deleta o telefone do cliente passando o ID e o telefone.

/locadora/tipoPagamento		Método: GET
Trás todos os tipos de pagamentos cadastrados no banco.

/locadora/aluguel	Método: GET
Trás todos os alugueis de carros cadastrados no banco.

/locadora/aluguel	Método: POST
Adiciona um novo aluguel de carro no banco.

```json
{
	"id_cliente": 9,
	"renavam": "99999999999"},
	"valor": 999.99,
	"id_tipo_pag": 9,
}
```

/locadora/devolucao	Método: POST
Adiciona uma data final no aluguel indicando q o mesmo acabou.

```json
{
	"id_cliente": 9,
	"renavam": "99999999999"}
}
```