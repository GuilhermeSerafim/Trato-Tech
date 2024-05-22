import { configureStore } from "@reduxjs/toolkit";
// xReducer -> Objeto que tem todos os reducers (funções que especificam como o estado deve mudar em resposta a ações)
import categoriasReducer from "./reducers/categorias";
import itensDeCadaCategoria from "./reducers/itensDeCadaCategoria"
import contadorReducer from "./reducers/contador";
import carrinhoReducer from "./reducers/carrinho";
import buscaReducer from "./reducers/busca";
// Criação e configuração do store
const store = configureStore({
    reducer: {
        categorias: categoriasReducer, // Passando um pedaço desses reducer que é o "categorias"
        itensCategoria: itensDeCadaCategoria,
        contador: contadorReducer, // Desafio
        carrinho: carrinhoReducer,
        busca: buscaReducer,
    }
});

export default store;