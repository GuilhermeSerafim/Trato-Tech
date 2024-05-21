import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itensCategoria"
import contador from "./reducers/contador";
// Criação e configuração do store
const store = configureStore({
reducer:{
    categorias: categoriasSlice, // Passando um pedaço desses reducer que é o "categorias"
    itensCategoria: itensSlice,
    contador: contador,
}
})

export default store;