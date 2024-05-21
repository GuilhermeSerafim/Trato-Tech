import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

/* ----------------------------------
 Diferença entre REDUCER e SLICE
 Em resumo, um reducer é uma função que define como o estado é atualizado em resposta a uma ação, enquanto um slice é uma estrutura organizacional
 que inclui o estado inicial, as ações e os reducers relacionados a uma parte específica do estado global da aplicação. 
 Um slice pode conter vários reducers, cada um responsável por uma parte diferente do estado, enquanto um reducer normalmente lida com uma parte específica do estado.
 ---------------------------------- */
 
const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => { // State é o estado inicial do carrinho
            // No Immer, você pode ou modificar o draft do estado diretamente ou retornar um novo estado, mas não ambos.
            const temItem = state.some(item => item.id === payload); // Verificação de existência do item no carrinho
            if (!temItem) {
                return [
                    ...state,
                    { // Adicionando um NOVO ESTADO (retornar uma mudança (push) não condiz com os padrões do Immer)
                        id: payload,
                        quantidade: 1
                    }];
            }
            // Se item.id !== payload for true, o item é mantido no novo array. Se for false, o item é excluído.
            return state.filter(item => item.id !== payload); // E AQUI TAMBÉM, RETORNA UM NOVO ESTADO
            // Para corrigir o erro, você deve escolher uma abordagem consistente: ou modificar o draft diretamente, ou retornar um novo estado.     
        }
    }
});

export const { mudarCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;