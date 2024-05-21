import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Categoria.module.scss";
import Item from "components/Item";

export default function Categoria() {
    const { categoriaId: paramCategoria } = useParams(); // Destructuring
    // Forma de pegar 2 states cm useSelector
    const { categoriaReducer, itensCategoriaReducer } = useSelector(state => ({ // Esse return é usado quando quero apenas retornar um objeto
        categoriaReducer: state.categorias.find(categoria => categoria.id === paramCategoria),
        itensCategoriaReducer: state.itensCategoria.filter(itemCategoria => itemCategoria.categoria == paramCategoria), // Filtro para exibir os dados da categoria respectiva
    }));

    return (
        <div>
            <Header
                titulo={categoriaReducer.nome}
                descricao={categoriaReducer.descricao}
                imagem={categoriaReducer.header}
            />
            <div className={styles.itensCategoria}>
                {itensCategoriaReducer?.map(itemCategoria => ( // O "?" faz com que se não tiver o item ele nem executa o map
                    <Item
                        key={itemCategoria.id}
                        {...itemCategoria}
                    />
                ))}
            </div>
        </div>
    )
}