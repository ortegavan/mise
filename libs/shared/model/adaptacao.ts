// libs/shared/model/adaptacao.ts

import type { Ingrediente } from './receita';

export type Operacao =
    | {
          readonly tipo: 'substituir';
          readonly ingredienteId: string;
          readonly por: Ingrediente;
          readonly justificativa: string;
      }
    | {
          readonly tipo: 'remover';
          readonly ingredienteId: string;
          readonly justificativa: string;
      }
    | {
          readonly tipo: 'reescalar';
          readonly fator: number;
      }
    | {
          readonly tipo: 'reescrever-etapa';
          readonly etapaId: string;
          readonly texto: string;
          readonly justificativa: string;
      }
    | {
          readonly tipo: 'ajustar-temperatura';
          readonly etapaId: string;
          readonly temperaturaC: number;
          readonly justificativa: string;
      };

export type Confianca = 'alta' | 'media' | 'baixa';

export interface Adaptacao {
    readonly id: string;
    readonly receitaBaseId: string;
    readonly restricoes: readonly string[];
    readonly operacoes: readonly Operacao[];
    readonly confianca: Confianca;
    readonly ressalvas: readonly string[];
}
