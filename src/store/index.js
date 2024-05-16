import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itensCategoria"
// Criação e configuração do store
const store = configureStore({
reducer:{
    categorias: categoriasSlice, // Passando um pedaço desses reducer que é o "categorias"
    itensCategoria: itensSlice
}
})

export default store;