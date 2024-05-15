import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";

// Criação do store
const store = configureStore({
reducer:{
    categorias: categoriasSlice // Passando um pedaço desses reducer que é o "categorias"
}
})

export default store;