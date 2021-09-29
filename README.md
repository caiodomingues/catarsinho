# Catarsinho

Este é um projeto de teste para o Catarse. A aplicação foi desenvolvida com React, utilizando TypeScript, a estilização da aplicação utiliza CSS Modules.

> Nota sobre a estilização:
> Visto que o projeto segue um corpo padrão, não optei por transformá-lo em um componente para reduzir o trabalho do JavaScript e repassá-lo para o motor de renderização visual do navegador por meio de um CSS Global padrão, que definiu a `section` principal, bem como as divs responsáveis pelas `.columns` e `.column`. A estilização segue a base do Bulma (sem utilizá-lo diretamente) para garantir maior fidelidade ao padrão do projeto.

Inicialmente, havia tomado a liberdade de editar o `db.json` para incluir um campo de `contributions`, e salvar as informações de contribuição como:

```json
  "contributions": [
    {
      "amount": "10",
      "id": 2
    }
  ]
```

No entando, como isso foge do padrão do projeto, eu decidi utilizar os Cookies para armazenar o carrinho, e não alterar o `db.json`.
Como a aplicação não solicita uma visualização do carrinho, para apagá-lo será necessário remover o cookie.

## Instalando

### 1. Clone o projeto

```sh
git clone git@github.com:caiodomingues/catarsinho.git nome-do-seu-app
cd nome-do-seu-app
```

### 2. Instale as dependências

```sh
yarn install # ou somente yarn
```

## Rode localmente

### 1. Inicie o servidor (json-server)

Eu utilizei o servidor na porta `8000` (flag para trocar porta do json-server: `--port 8000`).

```sh
json-server --watch db.json --port 8000
```

### 2. Inicie o React

```sh
yarn dev
```
