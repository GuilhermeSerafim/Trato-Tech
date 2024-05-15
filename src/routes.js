import PaginaPadrao from "PaginaPadrao";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<Home/>}/>
                    {/* Vamos ter que colocar TODAS AS CATEGORIAS aqui, e não é a função do route */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}