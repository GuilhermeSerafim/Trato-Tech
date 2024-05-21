import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            // No Immer, você pode ou modificar o draft do estado diretamente ou retornar um novo estado, mas não ambos.
            const temItem = state.some(item => item.id === payload); // Some é uma verificação bool
            if (!temItem) { // Verificação para adicionar o item
                return [
                    ...state,
                    { // Adicionando um NOVO ESTADO (antes estavamos enviando dentro do estado com push)
                        id: payload,
                        quantidade: 1
                    }];
            }
            return state.filter(item => item.id !== payload); // E AQUI TAMBÉM, RETORNA UM NOVO ESTADO
            // Para corrigir o erro, você deve escolher uma abordagem consistente: ou modificar o draft diretamente, ou retornar um novo estado.     
        }
    }
});

export const { mudarCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;