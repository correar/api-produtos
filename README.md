# api-produtos
api com conexão ao banco com o produto kit cama

# Recursos utilizados
- Node.Js ~ v.8.11.1;
- Express.Js ^4.13.4;
- Mongodb ^3.1.0-beta4;
- Mongoose ^5.1.3;
- nconf ^0.10.0;
- request ^2.87.0;

# Banco de dados
Mongodb utilizando o MLab;

## Como Usar a Aplicação ##
Para o consumo da API deverá utilizar os seguintes rotas:


   ROTA                   	|	HTTP	|	Descrição		|
---------------------------	| ---------	| -----------------	|							
 /api/kitcamas             	|	GET		| Selecionar Todos	|
 /api/kitcamas 				|	POST	| Criar Produto		|
 /api/kitcamas/:kitcama_id	|	GET		| Selecionar Por Id	|
 /api/kitcamas/:kitcama_id	|	PUT		| Atualizar Por Id	|
 /api/kitcamas/:kitcama_id	|	DELETE	| Excluir Por Id	|

### Executando a Aplicação
```
npm run dev
```