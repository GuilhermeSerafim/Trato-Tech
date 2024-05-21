import { createSlice } from "@reduxjs/toolkit";

const initialState = 10;

const contador = createSlice({
    name: 'contador',
    initialState,
    reducers: {
        incrementar: (state) => {
            return state + 1; // Retorna um novo estado baseado no estado atual
        },
        decrementar: (state) => {
            return state - 1; // Retorna um novo estado baseado no estado atual
        }
    }
});


export const { decrementar, incrementar } = contador.actions;
export default contador.reducer;