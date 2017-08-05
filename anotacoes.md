# Angular

[toc]

## Ambiente
Instalar node.js

Instalar Typescript e Angular:

    npm install -g typescript
    npm install -g @angular/cli

>Repositorio Node.js  
>www.npmjs.com

## Editores de texto
**Visual Studio Code** - Free - Suporta typescript  
**Webstorm** - Suporta typescript  
**Atom** - Free - suporte com plugin  
**Sublime Text** - suporte com plugin  

## Criar projeto
    ng new nome_projeto

Para Criar um projeto num diretório já existente:

    mkdir NomeProjeto
    cd NomeDoProjeto
    ng init

## Rodar projeto
    ng serve

Rodar e abrir a aplicação:

    ng serve -o

> **No c9.com**  
> ```
> nvm install 6
> nvm alias default 6
> 
> ng server -H  endereco_c9
> ```
> incluir linha em /etc/hosts:  
> `0.0.0.0  endereco_c9`


## Gerando componentes e serviços
Gerar componente:

    ng g c nome-componente
    ng g c caminho/nome-componente

Gerar módulo:

    ng g m nome-modulo

Gerar serviço

    ng g s nome-componente/nome-servico

## Data Binding

Interporção: {{ variavel }}

