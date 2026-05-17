# Projeto com Mocks

Aplicação Angular com estrutura organizada em camadas e dados de mock.

## O que este projeto contém

- Estrutura em `src/app/` com separação de responsabilidades:
  - `assets/mocks/`: dados e arquivos de exemplo para desenvolvimento.
  - `core/`: infraestrutura global e lógica de dados.
    - `data/mappers/`
    - `data/repositories-impl/`
  - `domain/`: regras de negócio e contratos.
    - `models/`
    - `repositories/`
    - `use-cases/`
  - `features/`: funcionalidades específicas do aplicativo, como `estados/`.

## Como rodar

```bash
cd projeto-mocks
npm install
npm start
```

Abra `http://localhost:4200/`.

## Scripts úteis

- `npm start`: executa `ng serve`
- `npm run build`: compila o projeto
- `npm test`: executa os testes com Vitest
- `npm run serve:ssr:projeto-teste-2`: serve a versão SSR gerada

## Dependências principais

- Angular 21.2.x
- `@angular/ssr`
- `express`
- `vitest`

## Observações

Este projeto demonstra uma arquitetura com separação entre dados, domínio e recursos de feature, ideal para desenvolvimento escalável.