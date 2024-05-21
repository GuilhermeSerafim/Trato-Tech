import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itensCategoria"
import contador from "./reducers/contador";
import carrinhoSlice from "./reducers/carrinho";
// Criação e configuração do store
const store = configureStore({
reducer:{
    categorias: categoriasSlice, // Passando um pedaço desses reducer que é o "categorias"
    itensCategoria: itensSlice,
    contador: contador, // Desafio
    carrinho: carrinhoSlice,
}
})

export default store;