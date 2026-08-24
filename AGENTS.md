# mise

Monorepo de estudos. Angular 22, arquitetura vertical, TypeScript puro no domínio.

## Comandos

pnpm install
pnpm exec sheriff verify # fronteiras de arquitetura, roda ANTES do lint
pnpm exec eslint .
pnpm exec ng build # dentro de apps/cozinha

## Arquitetura

O corte de primeiro nível é por domínio, não por tipo técnico.
libs/<dominio>/{domain-logic,data,feature-_,ui-_}

O Sheriff verifica as fronteiras. Se o lint reclamar de dependência, a solução NUNCA é adicionar exceção no sheriff.config.ts. É mover o código ou subir pro shared. Pergunte antes de editar a config.

domain-logic é TypeScript puro. Sem @angular/\*, sem rxjs, sem classe, sem inject(). Regra de negócio recebe o usuário como parâmetro, ela não consulta a sessão.

## Estilo

- Componentes standalone, OnPush, zoneless. Sem NgModule.
- Signals. Nada de BehaviorSubject pra estado local.
- verbatimModuleSyntax está ligado: import type quando for só tipo.
- Português nos nomes de domínio (Receita, Ingrediente, Etapa), inglês no vocabulário de framework.

## Não faça

- Não crie feature de produto. Este repositório demonstra facetas técnicas, não é um produto.
- Não adicione dependência sem perguntar.
