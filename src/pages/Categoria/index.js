import Header from "components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Categoria.module.scss";
import Item from "components/Item";
import { decrementar, incrementar } from "store/reducers/contador";


export default function Categoria() {
    const { categoriaId: paramCategoria } = useParams(); // Destructuring
    // Forma de pegar 2 states cm useSelector
    const { categoriaReducer, itensCategoriaReducer, contador } = useSelector(state => ({ // Esse return é usado quando quero apenas retornar um objeto
        categoriaReducer: state.categorias.find(categoria => categoria.id === paramCategoria),
        itensCategoriaReducer: state.itensCategoria.filter(itemCategoria => itemCategoria.categoria == paramCategoria), // Filtro para exibir os dados da categoria respectiva
        contador: state.contador
    }));
    const dispatch = useDispatch();
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
            <div style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
            <button onClick={() => dispatch(incrementar())}>Incrementar</button>
            <h1>{contador}</h1>
            <button onClick={() => dispatch(decrementar())}>Decrementar</button>

            </div>
        </div>
    )
}