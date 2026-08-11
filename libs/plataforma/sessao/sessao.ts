// libs/plataforma/sessao/sessao.ts

import type { Permissao, Usuario } from '@mise/shared/model';

export interface Sessao {
    usuarioAtual(): Usuario | null;
    autenticado(): boolean;
    temPermissao(p: Permissao): boolean;
}
