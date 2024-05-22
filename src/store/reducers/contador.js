import { createSlice } from "@reduxjs/toolkit";

const initialState = 10;

const contador = createSlice({
    name: 'contador',
    initialState,
    reducers: { // Criação de actions
        incrementar: (state, { payload, type }) => { // State é o estado que o reducer está encarregado de atualizar com base na ação recebida.
            console.log(payload); // Parametro passado no uso da função
            console.log(type); // nome do slice/nome da função
            return state + 1; // Retorna um novo estado baseado no estado atual
        },
        decrementar: (state) => { 
            return state - 1; // Retorna um novo estado baseado no estado atual
        }
    }
});

export const { decrementar, incrementar } = contador.actions;
export default contador.reducer; // Objeto que tem todos os reducers (funções que especificam como o estado deve mudar em resposta a ações)