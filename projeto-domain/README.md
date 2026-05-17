# Projeto de Domínio

Aplicação Angular com arquitetura em camadas e biblioteca de domínio clara.

## O que este projeto contém

- `src/app/application/`
  - `service/`: serviços de aplicação e orquestração de casos de uso.
- `src/app/domain/`
  - `entities/`: modelos de entidade do domínio.
  - `repository/`: contratos para persistência e busca de dados.
  - `use-cases/`: casos de uso que contêm regras de negócio.
- `src/app/infrastructure/`
  - `repository/`: implementações concretas de repositórios.
- `src/app/presentation/`
  - `pages/`: páginas e componentes de interface do usuário.

## Como rodar

```bash
cd projeto-domain
npm install
npm start
```

Abra `http://localhost:4200/`.

## Scripts úteis

- `npm start`: executa `ng serve`
- `npm run build`: compila o projeto
- `npm test`: executa os testes com Vitest
- `npm run serve:ssr:projeto-teste-3`: serve a versão SSR gerada

## Dependências principais

- Angular 21.2.x
- `@angular/ssr`
- `express`
- `vitest`

## Observações

Este projeto está organizado para desenvolvimento escalável com separação entre domínio, infraestrutura e apresentação. Ideal para aplicar padrões como Clean Architecture.