import { createSlice } from "@reduxjs/toolkit";

const initialState = 10;

const contador = createSlice({
    name: 'contador',
    initialState,
    reducers: {
        incrementar: (state, { payload, type }) => {
            console.log(payload);
            console.log(type);
            return state + 1; // Retorna um novo estado baseado no estado atual
        },
        decrementar: (state,{ payload, type }) => {
            console.log(payload);
            console.log(type); // Nome do type é contador (name) e o nome da função (decrementar nesse caso)
            return state - 1; // Retorna um novo estado baseado no estado atual
        }
    }
});


export const { decrementar, incrementar } = contador.actions;
export default contador.reducer;