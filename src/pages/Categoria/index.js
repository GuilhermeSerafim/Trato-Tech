import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Categoria.module.scss";
import Item from "components/Item";


export default function Categoria() {
    const { categoriaId: paramNomeCategoria } = useParams(); // Destructuring
    // Forma de pegar 2 states cm useSelector
    const { categoriaRespectivaAPagina, itensFiltradosPorCategoriaEBusca } = useSelector(state => { // Esse return é usado quando quero apenas retornar um objeto
        // state.busca é o valor do campo de pesquisa
        const regExp = new RegExp(state.busca, 'i'); // case-insensitive
        return {
            categoriaRespectivaAPagina: state.categorias.find(categoria => categoria.id /* Esse id é o name da categoria na verdade */ === paramNomeCategoria),
            itensFiltradosPorCategoriaEBusca: state.itensCategoria.filter(itemCategoria => itemCategoria.categoria == paramNomeCategoria
                && itemCategoria.titulo.match(regExp) // Para procurar correspondências em uma string baseada em uma expressão regular.
            ),
        }
    });

    return (
        <div>
            <Header
                titulo={categoriaRespectivaAPagina.nome}
                descricao={categoriaRespectivaAPagina.descricao}
                imagem={categoriaRespectivaAPagina.header}
            />
            <div className={styles.itensCategoria}>
                {itensFiltradosPorCategoriaEBusca?.map(itemCategoria => ( // O "?" faz com que se não tiver o item ele não executa o map
                    <Item
                        key={itemCategoria.idGerado}
                        {...itemCategoria}
                    />
                ))}
            </div>
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button onClick={() => dispatch(incrementar("testeIncrementar"))}>Incrementar</button>
                <h1>{contador}</h1>
                <button onClick={() => dispatch(decrementar("testeDecrementar"))}>Decrementar</button> -> Uso do payload

            </div> */}
        </div>
    )
}
