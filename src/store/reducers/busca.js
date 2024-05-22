import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

/* ----------------------------------
 Diferença entre REDUCER e SLICE
 Em resumo, um reducer é uma função que define como o estado é atualizado em resposta a uma ação, enquanto um slice é uma estrutura organizacional
 que inclui o estado inicial, as ações e os reducers relacionados a uma parte específica do estado global da aplicação. 
 Um slice pode conter vários reducers, cada um responsável por uma parte diferente do estado, enquanto um reducer normalmente lida com uma parte específica do estado.
 ---------------------------------- */

const buscaSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarBusca: (state, { payload }) => payload,
        resetarBusca: () => initialState,
    }
});

export const { mudarBusca, resetarBusca } = buscaSlice.actions;
export default buscaSlice.reducer;