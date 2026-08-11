// libs/receita/domain-logic/escala.ts

import type { Quantidade, Receita } from '@mise/shared/model';

function arredondar(n: number): number {
    return Math.round(n * 100) / 100;
}

function escalarQuantidade(q: Quantidade, fator: number): Quantidade {
    if (q.valor === 'a-gosto') return q;

    if (typeof q.valor === 'number') {
        return { ...q, valor: arredondar(q.valor * fator) };
    }

    const [min, max] = q.valor;
    return { ...q, valor: [arredondar(min * fator), arredondar(max * fator)] };
}

export function escalar(receita: Receita, fator: number): Receita {
    if (fator <= 0) throw new RangeError('fator deve ser maior que zero');

    return {
        ...receita,
        rendimento: {
            ...receita.rendimento,
            quantidade: arredondar(receita.rendimento.quantidade * fator),
        },
        ingredientes: receita.ingredientes.map((i) => ({
            ...i,
            quantidade: escalarQuantidade(i.quantidade, fator),
        })),
    };
}
