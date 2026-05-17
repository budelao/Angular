# Angular Workspace - Resumo dos Projetos

Este workspace contém um conjunto de projetos Angular agrupados em `teste_01`.
Cada projeto é uma aplicação Angular separada, com suporte a SSR e diferentes níveis de organização de código.

## Estrutura geral

- `projeto-basico`
- `projeto-mocks`
- `projeto-domain`
- `projeto-proxy`

## Descrição de cada projeto

### `projeto-basico`
- Projeto Angular básico gerado pelo Angular CLI.
- Contém apenas o conjunto principal de arquivos padrão em `src/app/`:
  - `app.config.server.ts`
  - `app.config.ts`
  - `app.html`
  - `app.routes.server.ts`
  - `app.routes.ts`
  - `app.scss`
  - `app.spec.ts`
  - `app.ts`
- Ideal como ponto de partida ou referência para um projeto Angular simples com suporte a SSR.
- Scripts principais:
  - `npm start` / `ng serve`
  - `npm run build`
  - `npm test`

### `projeto-mocks`
- Projeto Angular com estrutura mais organizada e divisão em módulos de recurso.
- Possui pastas adicionais em `src/app/`:
  - `assets/mocks/` - dados de mock ou recursos estáticos para testes/desenvolvimento.
  - `core/` - infraestrutura global do aplicativo.
    - `data/`
      - `mappers/`
      - `repositories-impl/`
  - `domain/` - camada de domínio e regras de negócio.
    - `models/`
    - `repositories/`
    - `use-cases/`
  - `features/` - funcionalidades específicas, como `estados/`.
- Esse projeto demonstra uma abordagem com separação de responsabilidades entre domínio, dados e recursos.

### `projeto-domain`
- Projeto Angular com arquitetura em camadas inspirada em Clean Architecture / DDD.
- Estrutura de `src/app/`:
  - `application/` - serviço e orquestração de casos de uso.
    - `service/`
  - `domain/`
    - `entities/`
    - `repository/`
    - `use-cases/`
  - `infrastructure/` - implementação concreta de repositórios e adaptação de dados.
    - `repository/`
  - `presentation/` - interface de usuário, páginas e componentes de apresentação.
    - `pages/`
- Mostra um projeto mais organizado para aplicações maiores, com separação clara entre domínio, infraestrutura e UI.

### `projeto-proxy`
- Projeto Angular similar ao `projeto-domain`, com arquitetura em camadas e suporte a proxy.
- Estrutura de `src/app/`:
  - `application/` - serviços de aplicação.
    - `services/`
  - `domain/`
    - `entities/`
    - `repositories/`
    - `use-cases/`
  - `infrastructure/`
    - `repositories/`
  - `presentation/`
    - `pages/`
- Inclui `proxy.conf.json`, indicando configuração de proxy para requests durante o desenvolvimento.
- Também suporta SSR e segue boas práticas de separação de camadas.

## Observações comuns

- Todos os projetos usam Angular 21.2.x e Angular CLI.
- Todos parecem ter suporte a SSR (`@angular/platform-server` e `express` no `package.json`).
- Cada projeto está isolado em sua própria pasta e possui seu próprio `package.json`.

## Como usar

Entre no diretório do projeto desejado e execute:

```bash
cd projeto-proxy
npm install
npm start
```

Para testar a outra aplicação, mude para o diretório correspondente e repita os comandos.

