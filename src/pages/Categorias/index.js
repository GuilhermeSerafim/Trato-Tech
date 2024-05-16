import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Categoria() {
    const { categoriaId: paramCategoria } = useParams(); // Destructuring
    const { categoriaReducer, itensCategoriaReducer } = useSelector(state => { // Destructuring
        return {
            categoriaReducer: state.categorias.find(categoria => categoria.id === paramCategoria),
            itensCategoriaReducer: state.itensCategoria.filter(itemCategoria => itemCategoria.categoria == paramCategoria), // Filtro para exibir os dados da categoria respectiva
        }
    });
    console.log(itensCategoriaReducer)
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