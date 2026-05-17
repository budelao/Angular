# Projeto Básico

Projeto Angular simples gerado pelo Angular CLI com suporte a SSR.

## O que este projeto contém

- Aplicação Angular básica em `src/app/`.
- Estrutura padrão sem divisão adicional de camadas.
- Arquivos principais em `src/app/`:
  - `app.config.server.ts`
  - `app.config.ts`
  - `app.html`
  - `app.routes.server.ts`
  - `app.routes.ts`
  - `app.scss`
  - `app.spec.ts`
  - `app.ts`

## Como rodar

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
cd projeto-basico
npm install
npm start
```

Abra `http://localhost:4200/` no navegador.

## Scripts úteis

- `npm start`: executa `ng serve`
- `npm run build`: compila o projeto
- `npm test`: executa os testes com Vitest
- `npm run serve:ssr:projeto-teste`: serve a versão SSR gerada

## Dependências principais

- Angular 21.2.x
- `@angular/ssr`
- `express`
- `vitest`

## Observações

Este projeto serve como referência para um aplicativo Angular básico com suporte a renderização no servidor e configuração padrão do CLI.