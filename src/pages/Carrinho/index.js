import Header from "components/Header";
import styles from "./Carrinho.module.scss";
import { useSelector } from "react-redux";
import Item from "components/Item";

export default function Carrinho() {
    const carrinho = useSelector(state => { // Estado global do Redux, que contém todos os slices (partes) do estado definidos na store.

        // reduce -> array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
        // itens: O acumulador que começa como um array vazio e coleta os itens processados.
        // itemNoCarrinho: O item atual do array state.carrinho sendo processado.
        const carrinhoReducer = state.carrinho.reduce((prevValues, itemAtualNoCarrinho) => { // PrevValues inicial = []
            // debugger
            const itemCategoria = state.itensCategoria.find(item => item.id === itemAtualNoCarrinho.id); // Retorna o primeiro item que corresponde ao critério de pesquisa ou undefined se nenhum item for encontrado.
            prevValues.push({
                ...itemCategoria,
                xxx: itemAtualNoCarrinho.quantidade,
            });
            return prevValues;
        }, []); // [] -> valor incial
        return carrinhoReducer;
    });

    return (
        <div>
            <Header
                titulo="Carrinhos de compras"
                descricao="Confira os produtos que você adicionou no carrinho"

            />
            <div className={styles.carrinho}>
                {carrinho.map(item => <Item key={item.id} {...item} />)}
                <div className={styles.total}>
                    <strong>
                        Resumo da compra
                    </strong>
                    <span>
                        SubTotal: <strong> R${0.0.toFixed(2)}</strong>
                    </span>
                </div>
            </div>
        </div>
    )
}