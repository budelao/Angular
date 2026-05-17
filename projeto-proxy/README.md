# Projeto com Proxy

Aplicação Angular com arquitetura em camadas e proxy de desenvolvimento configurado.

## O que este projeto contém

- Estrutura em `src/app/` semelhante ao `projeto-domain`.
- `src/app/application/services/`: serviços que orquestram casos de uso.
- `src/app/domain/`
  - `entities/`
  - `repositories/`
  - `use-cases/`
- `src/app/infrastructure/repositories/`: implementação de repositórios.
- `src/app/presentation/pages/`: páginas da aplicação.
- `proxy.conf.json`: configura proxy para desenvolvimento local.

## Como rodar

```bash
cd projeto-proxy
npm install
npm start
```

Abra `http://localhost:4200/`.

## Scripts úteis

- `npm start`: executa `ng serve --proxy-config proxy.conf.json`
- `npm run build`: compila o projeto
- `npm test`: executa os testes com Vitest
- `npm run serve:ssr:projeto-teste-4`: serve a versão SSR gerada

## Dependências principais

- Angular 21.2.x
- `@angular/ssr`
- `express`
- `vitest`

## Observações

Este projeto é recomendado para situações que precisam de rota de backend em desenvolvimento local, usando proxy para redirecionar chamadas de API.