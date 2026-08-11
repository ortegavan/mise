// libs/shared/model/usuario.ts

export type Permissao = 'editar-receita' | 'publicar' | 'moderar';

export interface Usuario {
    readonly id: string;
    readonly nome: string;
    readonly permissoes: readonly Permissao[];
}
