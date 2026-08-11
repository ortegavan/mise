// libs/shared/model/receita.ts

export type Funcao =
    | 'liga'
    | 'cresce'
    | 'hidrata'
    | 'gordura'
    | 'acidez'
    | 'aroma'
    | 'espessa'
    | 'estrutura';

export type Unidade =
    | 'g'
    | 'kg'
    | 'ml'
    | 'l'
    | 'colher-cha'
    | 'colher-sopa'
    | 'xicara'
    | 'unidade'
    | 'a-gosto';

export interface Quantidade {
    readonly valor: number | readonly [number, number] | 'a-gosto';
    readonly unidade: Unidade;
}

export interface Ingrediente {
    readonly id: string;
    readonly nome: string;
    readonly quantidade: Quantidade;
    readonly funcao: readonly Funcao[];
    readonly opcional: boolean;
}

export interface Etapa {
    readonly id: string;
    readonly ordem: number;
    readonly texto: string;
    readonly ingredientesUsados: readonly string[];
    readonly duracaoAtiva?: string; // ISO 8601: 'PT15M'
    readonly duracaoPassiva?: string; // ISO 8601: 'PT8H'
}

export interface Receita {
    readonly id: string;
    readonly slug: string;
    readonly titulo: string;
    readonly rendimento: {
        readonly quantidade: number;
        readonly unidade: string;
    };
    readonly ingredientes: readonly Ingrediente[];
    readonly etapas: readonly Etapa[];
    readonly tags: readonly string[];
}
