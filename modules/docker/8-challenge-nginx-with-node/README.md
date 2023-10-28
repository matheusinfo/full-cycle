## Full Cycle - Desafio Nginx com Node.js

## Objetivos
- Criar um serviço Node.js que atenda às solicitações do Nginx, insira registros na tabela "people" do banco de dados MySQL e forneça a lista de nomes cadastrados.
- Configurar o Nginx para atuar como um proxy reverso, direcionando as solicitações dos usuários para a aplicação Node.js.
- Implementar um arquivo `docker-compose.yml` para orquestrar os serviços Node.js, MySQL e Nginx.
- Certificar-se de que tudo funcione corretamente e esteja disponível na porta 8080 após executar o comando `docker-compose up -d`.

## Retorno da Aplicação Node.js
```html
<h1>Full Cycle Rocks!</h1>
> Lista de nomes cadastrados no banco de dados.
```

## Executando
- Comando: `docker-compose up -d`