# Cozinha

Aplicação Angular do domínio `receita`, dentro do monorepo `mise`. Consome as libs de domínio (`libs/receita`, `libs/plataforma`, `libs/shared`) pelos aliases `@mise/*`, definidos em `tsconfig.base.json`.

Para a arquitetura do monorepo — fronteiras entre módulos, convenções de código — veja o README na raiz do repositório.

## Servidor de desenvolvimento

```
pnpm start
```

Abra `http://localhost:4200/`. A aplicação recarrega automaticamente ao alterar os arquivos-fonte.

## Build

```
pnpm build
```

Os artefatos ficam em `dist/`.

## Testes

```
pnpm test
```

Executa os testes unitários com Vitest.

## Fronteiras de arquitetura

`sheriff verify` e `sheriff list` rodam a partir da raiz do monorepo, não daqui — veja o README raiz.
