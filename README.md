# mise

Monorepo de estudos de arquitetura Angular. Mostra, na prática, como organizar um projeto Angular greenfield com fronteiras de arquitetura verificadas por ferramenta, não apenas por convenção.

## Estrutura

```
apps/
  cozinha/          aplicação Angular
libs/
  <dominio>/
    domain-logic/   regra de negócio, TypeScript puro
    data/           acesso a dados
    feature-<nome>/ caso de uso, orquestra domain-logic + data + ui
    ui-<nome>/       componentes de apresentação
  shared/           código compartilhado entre domínios
  plataforma/       infraestrutura transversal (sessão, etc.)
```

O corte de primeiro nível é por domínio (por exemplo, `receita`), não por tipo técnico. Cada domínio é vertical: tem sua própria lógica, dados e UI.

## Arquitetura

As fronteiras entre módulos são verificadas pelo Sheriff (`sheriff.config.ts`), não apenas documentadas. Regras principais:

- `domain-logic` é TypeScript puro: sem `@angular/*`, sem RxJS, sem `inject()`.
- Um domínio só pode depender de si mesmo ou de `shared`.
- `feature` pode depender de `ui`, `data`, `domain-logic`, `util` e `plataforma`.

O detalhe completo das regras está em `sheriff.config.ts`. Se o lint reclamar de uma dependência, a solução não é abrir exceção na configuração — é mover o código de lugar ou subir para `shared`.

## Comandos

Instalar dependências (workspace pnpm):

```
pnpm install
```

Verificar as fronteiras de arquitetura (rodar antes do lint):

```
pnpm exec sheriff verify
```

Listar os módulos que o Sheriff está enxergando a partir dos entry points configurados:

```
pnpm exec sheriff list
```

Lint:

```
pnpm exec eslint .
```

Para rodar, buildar ou testar a aplicação, veja `apps/cozinha/README.md`.

## Convenções

- Nomes de domínio em português (`Receita`, `Ingrediente`, `Sessao`); vocabulário de framework em inglês.
- `verbatimModuleSyntax` ligado: `import type` para imports só de tipo.
- Componentes standalone, `OnPush`, zoneless, sem `NgModule`.
- Estado local com signals, não `BehaviorSubject`.
