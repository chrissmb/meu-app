# Angular

- [Angular](#angular)
    - [Ambiente](#ambiente)
    - [Editores de texto](#editores-de-texto)
    - [Criar projeto](#criar-projeto)
    - [Rodar projeto](#rodar-projeto)
    - [Gerando arquivos](#gerando-arquivos)
    - [Data Binding](#data-binding)
    - [Abstrair Bootstrap](#abstrair-bootstrap)
    - [Testes](#testes)
    - [Gerar Build](#gerar-build)

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


## Gerando arquivos
Gerar componente:

    ng generate component nome-componente
    ng g c nome-componente
    ng g c caminho/nome-componente

Gerar módulo:

    ng g m nome-modulo

Gerar serviço

    ng g s nome-componente/nome-servico

Tabela de comandos:

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

## Data Binding

Interporção: `{{ variavel }}`
```
<img src="{{variavel}}">
<img [src]="variavel">
<img bind-src="variavel">
```
## Abstrair Bootstrap

    npm install ngx-bootstrap bootstrap --save

Abrir o arquvo angular-cli.sjon e incluir `"../node_modules/bootstrap/dist/css/bootstrap.min.css",` ficando assim:

```
 "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],
```
ou em style.css incluir 

    @import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

> Outros complementos para instalar no Angular:
> Lodash
> Materialize

## Testes

Verifica se código segue normas do style guide:

    ng lint

Testa o código conforme os arquivos .spec.ts:

    ng test

Teste end-to-end:
    ng e2e

## Gerar Build

Build em modo develop

    ng build --dev
    ng build

Build em modo produção

    ng build --prod

> Servidor http nodejs:   
> `npm install http-server -g`
>
> executar:  
> ```
> cd dist
> http-server
> ```

