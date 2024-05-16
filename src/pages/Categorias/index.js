import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Categoria() {
    const { nomeCategoria: paramCategoria } = useParams(); // Destructuring
    const categoriaReducer = useSelector(state => state.categorias.find(categoria => categoria.id === paramCategoria));
    return (
        <div>
            <Header
                titulo={categoriaReducer.nome}
                descricao={categoriaReducer.descricao}
                imagem={categoriaReducer.header}
            />
        </div>
    )
}