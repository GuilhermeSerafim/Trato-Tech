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
            // debugger
            // Verifica se algum item no carrinho tem o id igual ao payload
            const temItem = state.some(item => item.id === payload);
            if (!temItem) {
                return [
                    ...state,
                    {
                        id: payload,
                        quantidade: 1
                    }];
            }

            return state.filter(item => item.id !== payload);
        },
        mudarQuantidadeDoItem: (state, { payload }) => {
            state = state.map(itemCarrinho => {
                if (itemCarrinho.id === payload.idGerado) itemCarrinho.quantidade += payload.quantidade;
                return itemCarrinho;
            });
        },
        resetarCarrinho: () => initialState,
        
    }
});

export const { mudarCarrinho, mudarQuantidadeDoItem, resetarCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;